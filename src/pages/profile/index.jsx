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
import { useGetUserQuery } from "../../services/skyvitoSrvcAPI";
import { getAccessToken } from "../../libs/auth";
import React from "react";

export default function Profile() {
  const accessTokenObj = getAccessToken();

  const { isSuccess, isLoading, isError, data } = useGetUserQuery(
    { accessToken: accessTokenObj.value },
    { skip: false }
  );

  console.log("user object", data);

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
            {isSuccess ? (
              <React.Fragment>
                <HeaderTitle>{`Здравствуйте${
                  data.name ? `, ${data.name}` : ""
                }!`}</HeaderTitle>
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
                          <S.InputWithLabelShort
                            label={"Имя"}
                            defaultValue={data.name}
                          />
                          <S.InputWithLabelShort
                            label={"Фамилия"}
                            defaultValue={data.surname}
                          />
                          <S.InputWithLabelShort
                            label={"Город"}
                            defaultValue={data.city}
                          />
                          <S.InputWithLabelLong
                            label={"Телефон"}
                            defaultValue={data.phone}
                          />
                          <S.ProfileSaveBtn>Сохранить</S.ProfileSaveBtn>
                        </S.SettingsForm>
                      </S.SettingsRight>
                    </S.ProfileSettings>
                  </S.ProfileContent>
                </S.MainProfile>
              </React.Fragment>
            ) : (
              <p>Profile is loading</p>
            )}

            <HeaderSubtitle>{"Мои товары"}</HeaderSubtitle>
          </S.MainCenterBlock>
          <Goods />
        </S.MainContainer>
      </main>
      <Footer />
    </React.Fragment>
  );
}
