import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import * as S from "./style";
import Logo from "../../components/logo";
import FormMenu from "../../components/form-menu";
import HeaderTitle from "../../components/font-styles/header-title";
import HeaderSubtitle from "../../components/font-styles/header-subtitle";
import ProfileImg from "../../components/profile-img";
import ButtonMain from "../../components/button-main";
import Goods from "../../components/goods";
import HeaderMain from "../../components/header-main";
import Subheading from "../../components/font-styles/subheading";
import ParagraphInfo from "../../components/font-styles/paragraph-info";

export default function Profile() {
  return (
    <React.Fragment>
      <Header />
      <main className="main">
        <S.MainContainer>
          <S.MainCenterBlock>
            <HeaderMain>
              <Logo />
              <FormMenu>
                <ButtonMain>Вернуться на главную</ButtonMain>
              </FormMenu>
            </HeaderMain>
            <HeaderTitle>{"Профиль продавца"}</HeaderTitle>
            <S.MainProfile>
              <S.ProfileContent>
                <S.ProfileSettings>
                  <S.SettingsLeft>
                    <ProfileImg />
                  </S.SettingsLeft>
                  <S.SettingsRight>
                    <Subheading>{"Кирилл Матвеев"}</Subheading>
                    <ParagraphInfo>{"Санкт-Петербург"}</ParagraphInfo>
                    <ParagraphInfo>
                      {"Продает товары с августа 2021"}
                    </ParagraphInfo>
                    <S.SellerImgMobileWrapper>
                      <S.SellerImgMobileContent>
                        <a href="/" target="_self" alt="seller-mobile">
                          <img src="#" alt="" />
                        </a>
                      </S.SellerImgMobileContent>
                    </S.SellerImgMobileWrapper>
                    <ButtonMain>
                      Показать телефон
                      <span>8 905 ХХХ ХХ ХХ</span>
                    </ButtonMain>
                  </S.SettingsRight>
                </S.ProfileSettings>
              </S.ProfileContent>
            </S.MainProfile>
            <HeaderSubtitle>{"Товары продавца"}</HeaderSubtitle>
          </S.MainCenterBlock>
          <Goods />
        </S.MainContainer>
      </main>
      <Footer />
    </React.Fragment>
  );
}
