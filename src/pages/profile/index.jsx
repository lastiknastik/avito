import Header from "../../components/header";
import Footer from "../../components/footer";
import * as S from "./style";
import Logo from "../../components/logo";
import FormMenu from "../../components/form-menu";
import HeaderTitle from "../../components/font-styles/header-title";
import HeaderSubtitle from "../../components/font-styles/header-subtitle";
import ProfileImg from "../../components/profile-img";
//import ActionLink from "../../components/action-link";
import ButtonMain from "../../components/button-main";
import Goods from "../../components/goods";
import HeaderMain from "../../components/header-main";
import { useGetUserQuery } from "../../services/skyvitoSrvcAPI";
import { getAccessToken } from "../../libs/auth";
import React from "react";
import ActionInput from "../../components/action-input";
import { SKYVITO_API_BASE_URL } from "../../constants";
import { useState } from "react";

function ProfileContent({ data }) {
  //set default value for avatar src
  const [avatarSrc, setAvatarSrc] = useState(
    data.avatar ? `${SKYVITO_API_BASE_URL}${data.avatar}` : null
  );

  //display preview of selected image
  const onAvatarValueChangeHandler = (e) => {
    if (e.target.files && e.target.files[0]) {
      setAvatarSrc(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <React.Fragment>
      <HeaderTitle>{`Здравствуйте${
        data.name ? `, ${data.name}` : ""
      }!`}</HeaderTitle>
      <S.MainProfile>
        <S.ProfileContent>
          <HeaderSubtitle>Настройки профиля</HeaderSubtitle>
          <S.ProfileSettings>
            <S.SettingsLeft>
              <ProfileImg src={avatarSrc} />
              <ActionInput
                value=""
                type="file"
                accept="image/*"
                name="avatar"
                label="Заменить"
                onChange={onAvatarValueChangeHandler}
              />
              {/*<ActionLink>{"Заменить"}</ActionLink>*/}
            </S.SettingsLeft>
            <S.SettingsRight>
              <S.SettingsForm>
                <S.InputWithLabelShort
                  label="Имя"
                  defaultValue={data.name}
                  name="name"
                />
                <S.InputWithLabelShort
                  label="Фамилия"
                  defaultValue={data.surname}
                  name="surname"
                />
                <S.InputWithLabelShort
                  label="Город"
                  defaultValue={data.city}
                  name="city"
                />
                <S.InputWithLabelLong
                  label="Телефон"
                  defaultValue={data.phone}
                  name="phone"
                />
                <S.ProfileSaveBtn>Сохранить</S.ProfileSaveBtn>
              </S.SettingsForm>
            </S.SettingsRight>
          </S.ProfileSettings>
        </S.ProfileContent>
      </S.MainProfile>
    </React.Fragment>
  );
}

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
              <ProfileContent data={data} />
            ) : (
              <p>Profile is loading</p>
            )}

            <HeaderSubtitle>Мои товары</HeaderSubtitle>
          </S.MainCenterBlock>
          <Goods />
        </S.MainContainer>
      </main>
      <Footer />
    </React.Fragment>
  );
}
