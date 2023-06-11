import * as S from "./style";
import HeaderSubtitle from "../../components/font-styles/header-subtitle";
import FormMenu from "../../components/form-menu";
import TextAreaWithLabel from "../../components/controls/textarea-with-label";
import ButtonMain from "../../components/button-main";

const reviews = [
  {
    id: 1,
    name: "Олег",
    date: "14 августа",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    name: "Олег",
    date: "14 августа",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    name: "Олег",
    date: "14 августа",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

function ReviewItem({ name, date, text }) {
  return (
    <S.ReviewItemWrapper>
      <S.ReviewItemContent>
        <S.ReviewItemContentLeft>
          <div>
            <img src="" alt="" />
          </div>
        </S.ReviewItemContentLeft>
        <S.ReviewItemContentRight>
          <S.ReviewItemContentName>
            {`${name} `}
            <span>{date}</span>
          </S.ReviewItemContentName>
          <S.ReviewItemContentTitle>{"Комментарий"}</S.ReviewItemContentTitle>
          <p>{text}</p>
        </S.ReviewItemContentRight>
      </S.ReviewItemContent>
    </S.ReviewItemWrapper>
  );
}

export default function Reviews({ children }) {
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
          />
          <ButtonMain>{"Oпубликовать"}</ButtonMain>
        </FormMenu>
        <S.ReviewsList>
          {reviews.map((r) => (
            <ReviewItem key={r.id} name={r.name} date={r.date} text={r.text} />
          ))}
        </S.ReviewsList>
      </S.Content>
    </S.Wrapper>
  );
}
