import * as S from "./style";
import HeaderSubtitle from "../../components/font-styles/header-subtitle";
import FormMenu from "../../components/form-menu";
import TextAreaWithLabel from "../../components/controls/textarea-with-label";
import ButtonMain from "../../components/button-main";
import { prettifyDate } from "../../libs/utils";
import { SKYVITO_API_BASE_URL } from "../../constants";
import { useState } from "react";
import { usePostAdvCommentMutation } from "../../services/skyvitoSrvcAPI";
import { useNavigate } from "react-router-dom";
import { useIsAuthenticated } from "../../libs/auth";

function ReviewItem({ name, date, text, avatar }) {
  const avatarUrl = `${SKYVITO_API_BASE_URL}${avatar}`;

  return (
    <S.ReviewItemWrapper>
      <S.ReviewItemContent>
        <S.ReviewItemContentLeft>
          <div>
            <img src={avatarUrl} alt="" />
          </div>
        </S.ReviewItemContentLeft>
        <S.ReviewItemContentRight>
          <S.ReviewItemContentName>
            {name}
            <span>{date}</span>
          </S.ReviewItemContentName>
          <S.ReviewItemContentTitle>{"Комментарий"}</S.ReviewItemContentTitle>
          <p>{text}</p>
        </S.ReviewItemContentRight>
      </S.ReviewItemContent>
    </S.ReviewItemWrapper>
  );
}

export default function Reviews({ data, advId }) {
  const navigate = useNavigate();

  const isAuthenticated = useIsAuthenticated();

  const [postComment] = usePostAdvCommentMutation();
  const [reviewComment, setReviewComment] = useState({
    isPrepared: false,
    text: "",
  });

  const onReviewTextAreaChangedHandler = (e) => {
    e.target.value !== ""
      ? setReviewComment({ isPrepared: true, textRef: e.target })
      : setReviewComment({ isPrepared: false });
  };

  const onPostCommentClickHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (isAuthenticated) {
      postComment({ advId, comment: reviewComment.textRef.value })
        .unwrap()
        .then((payload) => {
          console.debug("new comment created", payload);
          reviewComment.textRef.value = "";
        })
        .catch((err) => console.error(err));
    } else {
      navigate("/signin");
    }
  };

  return (
    <S.Wrapper>
      <HeaderSubtitle>{"Отзывы о товаре"}</HeaderSubtitle>
      <S.Content>
        <FormMenu>
          <TextAreaWithLabel
            placeholder={"Введите описание"}
            label={"Добавить отзыв"}
            name="new-adv-text"
            id="new-adv-text"
            rows="5"
            onChange={onReviewTextAreaChangedHandler}
          />
          <ButtonMain
            disabled={!reviewComment.isPrepared}
            onClick={onPostCommentClickHandler}
          >
            Oпубликовать
          </ButtonMain>
        </FormMenu>
        <S.ReviewsList>
          {data.map((r) => (
            <ReviewItem
              key={r.id}
              name={r.author.name}
              avatar={r.author.avatar}
              date={prettifyDate(r.created_on)}
              text={r.text}
            />
          ))}
        </S.ReviewsList>
      </S.Content>
    </S.Wrapper>
  );
}
