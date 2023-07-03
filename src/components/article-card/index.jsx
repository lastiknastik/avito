import * as S from "./style";
import HeaderSubtitle from "../font-styles/header-subtitle";
import React from "react";
import ButtonMain from "../button-main";
import {
  useGetAdsByIdQuery,
  useGetUserQuery,
} from "../../services/skyvitoSrvcAPI";
import { prettifyDate, prettifyPrice, formatSellsFrom } from "../../libs/utils";
import { SKYVITO_API_BASE_URL } from "../../constants";
import avatarStub from "../../static/img/avatar.png";
import { useState } from "react";
import noImgPng from "../../static/img/no-image.png";

export default function ArticleCard({ articleId }) {
  const {
    data: adv,
    isLoading,
    isSuccess,
  } = useGetAdsByIdQuery({ id: articleId }, { skip: false });

  if (isSuccess) console.log(adv);

  const { isSuccess: currentUser_isSuccess, data: currentUser } =
    useGetUserQuery(); //cached data is ok

  const [isPhoneHidden, setIsPhoneHidden] = useState(true);

  const onShowPhoneBtnClickHandler = (e) => {
    setIsPhoneHidden(!isPhoneHidden);
  };

  const getImgSrc = (src, showStubImg) => {
    return src ? SKYVITO_API_BASE_URL + src : showStubImg ? noImgPng : "";
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
                {/* TODO: mark one of them active - useState */}
                <S.ArticleImgBarItemCircle />
                <S.ArticleImgBarItemCircle />
                <S.ArticleImgBarItemCircle />
                <S.ArticleImgBarItemCircle />
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
                  {"23 отзыва"}
                </S.ArticleInfoLink>
              </S.ArticleInfo>
              <S.ArticleInfoPrice>
                {prettifyPrice(adv.price)}
              </S.ArticleInfoPrice>
              <S.ArticleActionsWrapper>
                {currentUser_isSuccess && currentUser.id === adv.user.id ? (
                  <React.Fragment>
                    <ButtonMain>Редактировать</ButtonMain>
                    <ButtonMain>Снять с публикации</ButtonMain>
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
