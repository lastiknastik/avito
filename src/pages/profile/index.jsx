import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import * as S from "./style";
import Logo from "../../components/logo";
import FormMenu from "../../components/form-menu";
import HeaderTitle from "../../components/font-styles/header-title";
import HeaderSubtitle from "../../components/font-styles/header-subtitle";
import ProfileImg from "../../components/profile-img";
import ActionLink from "../../components/action-link";
import ButtonMain from "../../components/button-main";
import Goods from "../../components/goods";
import HeaderMain from "../../components/header-main";

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
            <HeaderTitle>{"Здравствуйте, Антон!"}</HeaderTitle>
            <S.MainProfile>
              <S.ProfileContent>
                <HeaderSubtitle>{"Настройки профиля"}</HeaderSubtitle>
                <S.ProfileSettings>
                  <S.SettingsLeft>
                    <ProfileImg />
                    <ActionLink>{"Заменить"}</ActionLink>
                  </S.SettingsLeft>
                  <S.SettingsRight>
                    <S.SettingsForm>
                      <S.InputWithLabelShort label={"Имя"} />
                      <S.InputWithLabelShort label={"Фамилия"} />
                      <S.InputWithLabelShort label={"Город"} />
                      <S.InputWithLabelLong label={"Телефон"} />
                      <S.ProfileSaveBtn>Сохранить</S.ProfileSaveBtn>
                    </S.SettingsForm>
                  </S.SettingsRight>
                </S.ProfileSettings>
              </S.ProfileContent>
            </S.MainProfile>
            <HeaderSubtitle>{"Мои товары"}</HeaderSubtitle>
          </S.MainCenterBlock>
          <Goods />
        </S.MainContainer>
      </main>
      <Footer />
    </React.Fragment>
  );
}
