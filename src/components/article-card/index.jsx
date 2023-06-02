import * as S from "./style";
import HeaderSubtitle from "../header-subtitle";
import React from "react";

function ImgBarItem() {
  return (
    <S.ArticleImgBarItem>
      <img src="" alt="" />
    </S.ArticleImgBarItem>
  );
}

export default function ArticleCard({ children, articleId }) {
  //TODO:
  const article = { id: articleId, imgSrc: "imgSrc" };

  return (
    <React.Fragment>
      <S.Main>
        <S.Content>
          <S.ContentLeft>
            <S.ArticleImgWrapper>
              <S.ArticleImg />
              <S.ArticleImgBar>
                <ImgBarItem />
                <ImgBarItem />
                <ImgBarItem />
                <ImgBarItem />
                <ImgBarItem />
                <ImgBarItem />
              </S.ArticleImgBar>
              <S.ArticleImgBarMob>
                {/* TODO: add circle-active */}
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
                {"Ракетка для большого тенниса Triumph Pro STС Б/У"}
              </S.HeaderSubtitleNoMarginBottom>
              <S.ArticleInfo>
                <S.ArticleInfoDate>{"Сегодня в 10:45"}</S.ArticleInfoDate>
                <S.ArticleInfoCity>{"Санкт-Петербург"}</S.ArticleInfoCity>
                <S.ArticleInfoLink href="" target="_blank">
                  {"23 отзыва"}
                </S.ArticleInfoLink>
              </S.ArticleInfo>
              <S.ArticleInfoPrice>2 200 ₽</S.ArticleInfoPrice>
              <S.ArticleActionBtn>
                Показать телефон
                <span>8 905 ХХХ ХХ ХХ</span>
              </S.ArticleActionBtn>
              <S.ArticleAuthor>
                <S.AuthorImg>
                  <img src="" alt="" />
                </S.AuthorImg>
                <S.AuthorInfo>
                  <S.AuthorName>Кирилл</S.AuthorName>
                  <S.AuthorAbout>
                    {"Продает товары с августа 2021"}
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
          {
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
        </S.ArticleDescriptionContent>
      </S.ArticleDescription>
    </React.Fragment>
  );
}
