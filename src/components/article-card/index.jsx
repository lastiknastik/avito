import * as S from "./style";
import HeaderSubtitle from "../font-styles/header-subtitle";
import React from "react";
import ButtonMain from "../button-main";
import {
  useGetAdsByIdQuery,
  useGetUserQuery,
  useDeleteAdvByIdMutation,
  useGetCommentsByAdvIdQuery,
} from "../../services/skyvitoSrvcAPI";
import { prettifyDate, prettifyPrice, formatSellsFrom } from "../../libs/utils";
import { SKYVITO_API_BASE_URL } from "../../constants";
import avatarStub from "../../static/img/avatar.png";
import { useState } from "react";
import noImgPng from "../../static/img/no-image.png";
import Popover from "../popover";
import Confirmation from "../confirmation";
import { useNavigate } from "react-router-dom";
import NewAdv from "../../pages/new-adv";

export default function ArticleCard({ articleId }) {
  const navigate = useNavigate();

  const {
    data: adv,
    isLoading,
    isSuccess,
  } = useGetAdsByIdQuery({ id: articleId }, { skip: false });

  const { isSuccess: currentUser_isSuccess, data: currentUser } =
    useGetUserQuery(); //cached data is ok

  const [isPhoneHidden, setIsPhoneHidden] = useState(true);

  const onShowPhoneBtnClickHandler = (e) => {
    setIsPhoneHidden(!isPhoneHidden);
  };

  const [
    showRemoveAdvConfirmationPopover,
    setShowRemoveAdvConfirmationPopover,
  ] = useState(false);

  const onRemoveAdvBtnClickHandler = () => {
    setShowRemoveAdvConfirmationPopover(true);
  };

  const onRemoveAdvConfirmationPopoverCloseHandler = () => {
    setShowRemoveAdvConfirmationPopover(false);
  };

  const [showEditAdvPopover, setShowEditAdvPopover] = useState(false);

  const onEditAdvBtnClickHandler = () => {
    setShowEditAdvPopover(true);
  };

  const onEditAdvPopoverCloseHandler = () => {
    setShowEditAdvPopover(false);
  };

  const { isSuccess: getComments_isSuccess, data: comments } =
    useGetCommentsByAdvIdQuery({ advId: articleId }, { skip: false });

  const onRemoveAdvConfirmationPopoverConfirmHandler = (id) => {
    return () => {
      removeAdvById({ advId: id })
        .unwrap()
        .then((payload) => {
          onRemoveAdvConfirmationPopoverCloseHandler();
          navigate("/"); //TODO: implement redirecting to previous url
        })
        .catch((err) => console.error(err));
    };
  };

  /* returns img url or empty string if there is no img available
  showStubImg parameter allows to show stub image if img url not provided */
  const getImgSrc = (src, showStubImg) => {
    return src ? SKYVITO_API_BASE_URL + src : showStubImg ? noImgPng : "";
  };

  const [removeAdvById] = useDeleteAdvByIdMutation();

  const getReadaleNumberOfComments = (numberOfComments) => {
    let result = numberOfComments;

    const tenth = numberOfComments % 10;
    if (tenth === 1) {
      result += " отзыв";
    } else if (tenth >= 2 && tenth <= 4) {
      result += " отзыва";
    } else if (tenth === 0 || (tenth >= 5 && tenth <= 9)) {
      result += " отзывов";
    }

    console.log("result", result);
    return result;
  };

  return isLoading ? (
    <p>Adv content is loading</p>
  ) : isSuccess ? (
    <React.Fragment>
      <S.Main>
        <S.Content>
          <S.ContentLeft>
            <S.ArticleImgWrapper>
              <S.ArticleImg imgSrc={getImgSrc(adv.images[0]?.url, true)} />
              <S.ArticleImgBar>
                <S.ArticleImgBarItem imgSrc={getImgSrc(adv.images[1]?.url)} />
                <S.ArticleImgBarItem imgSrc={getImgSrc(adv.images[2]?.url)} />
                <S.ArticleImgBarItem imgSrc={getImgSrc(adv.images[3]?.url)} />
                <S.ArticleImgBarItem imgSrc={getImgSrc(adv.images[4]?.url)} />
                <S.ArticleImgBarItem imgSrc={getImgSrc(adv.images[5]?.url)} />
              </S.ArticleImgBar>
              <S.ArticleImgBarMob>
                {/* TODO: mark one of them active - useState, show images and Go Back button */}
                <S.ArticleImgBarItemCircle
                  imgSrc={getImgSrc(adv.images[1]?.url)}
                />
                <S.ArticleImgBarItemCircle
                  imgSrc={getImgSrc(adv.images[2]?.url)}
                />
                <S.ArticleImgBarItemCircle
                  imgSrc={getImgSrc(adv.images[3]?.url)}
                />
                <S.ArticleImgBarItemCircle
                  imgSrc={getImgSrc(adv.images[4]?.url)}
                />
                <S.ArticleImgBarItemCircle
                  imgSrc={getImgSrc(adv.images[5]?.url)}
                />
              </S.ArticleImgBarMob>
            </S.ArticleImgWrapper>
          </S.ContentLeft>
          <S.ContentRight>
            <S.ArticleInfoWrapper>
              <S.HeaderSubtitleNoMarginBottom>
                {adv.title}
              </S.HeaderSubtitleNoMarginBottom>
              <S.ArticleInfo>
                <S.ArticleInfoDate>
                  {prettifyDate(adv.created_on)}
                </S.ArticleInfoDate>
                <S.ArticleInfoCity>{adv.user.city}</S.ArticleInfoCity>
                <S.ArticleInfoLink href="" target="_blank">
                  {getComments_isSuccess
                    ? getReadaleNumberOfComments(comments.length)
                    : "-"}
                </S.ArticleInfoLink>
              </S.ArticleInfo>
              <S.ArticleInfoPrice>
                {prettifyPrice(adv.price)}
              </S.ArticleInfoPrice>
              <S.ArticleActionsWrapper>
                {currentUser_isSuccess && currentUser.id === adv.user.id ? (
                  <React.Fragment>
                    <ButtonMain onClick={onEditAdvBtnClickHandler}>
                      Редактировать
                    </ButtonMain>
                    {showEditAdvPopover && (
                      <Popover onClose={onEditAdvPopoverCloseHandler}>
                        <NewAdv
                          onClose={onEditAdvPopoverCloseHandler}
                          data={adv}
                        />
                      </Popover>
                    )}
                    <ButtonMain onClick={onRemoveAdvBtnClickHandler}>
                      Снять с публикации
                    </ButtonMain>
                    {showRemoveAdvConfirmationPopover && (
                      <Popover
                        onClose={onRemoveAdvConfirmationPopoverCloseHandler}
                      >
                        <Confirmation
                          onCancel={onRemoveAdvConfirmationPopoverCloseHandler}
                          onConfirm={onRemoveAdvConfirmationPopoverConfirmHandler(
                            adv.id
                          )}
                        />
                      </Popover>
                    )}
                  </React.Fragment>
                ) : adv.user.phone ? (
                  <ButtonMain onClick={onShowPhoneBtnClickHandler}>
                    {isPhoneHidden ? "Показать телефон" : "Скрыть телефон"}
                    <span>
                      {isPhoneHidden
                        ? adv.user.phone.substring(
                            0,
                            adv.user.phone.length - 9
                          ) +
                          adv.user.phone
                            .replace(/[0-9]/g, "X")
                            .substring(
                              adv.user.phone.length - 9,
                              adv.user.phone.length
                            )
                        : adv.user.phone}
                    </span>
                  </ButtonMain>
                ) : (
                  ""
                )}
              </S.ArticleActionsWrapper>
              <S.ArticleAuthor>
                <S.AuthorImg>
                  <img
                    src={
                      adv.user.avatar
                        ? SKYVITO_API_BASE_URL + adv.user.avatar
                        : avatarStub
                    }
                    alt="avatar"
                  />
                </S.AuthorImg>
                <S.AuthorInfo>
                  <S.AuthorName>{adv.user.name}</S.AuthorName>
                  <S.AuthorAbout>
                    {`Продает товары с ${formatSellsFrom(adv.user.sells_from)}`}
                  </S.AuthorAbout>
                </S.AuthorInfo>
              </S.ArticleAuthor>
            </S.ArticleInfoWrapper>
          </S.ContentRight>
        </S.Content>
      </S.Main>
      <S.ArticleDescription>
        <HeaderSubtitle>{"Описание товара"}</HeaderSubtitle>
        <S.ArticleDescriptionContent>
          {adv.description && adv.description !== ""
            ? adv.description
            : "Описание отсутствует"}
        </S.ArticleDescriptionContent>
      </S.ArticleDescription>
    </React.Fragment>
  ) : (
    <p>Adv loading failed</p>
  );
}
