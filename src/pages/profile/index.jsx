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
import { useGetUserQuery } from "../../services/skyvitoSrvcAPI";
import { getAccessToken } from "../../libs/auth";
import React from "react";
import ActionInput from "../../components/action-input";
import { SKYVITO_API_BASE_URL } from "../../constants";
import { useState } from "react";

function ProfileContent({ data }) {
  const formId = "profile_form";
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

  const [changedProfileSettings, setChangedProfileSettings] = useState({
    isChanged: false,
    changedSettings: [],
  });

  const onProfileSettingsChangeHandler = (e) => {
    const target = e.target;

    if (target.tagName !== "INPUT") return;

    /* for avatar field only value is important because there is no functionality
    to reverse changed avatar */
    if (
      (target.name !== "avatar" && target.value !== target.dataset.initValue) ||
      (target.name === "avatar" && target.value)
    ) {
      /* push input name to the list of changed attributes if it wasn't pushed before */
      if (changedProfileSettings.changedSettings.indexOf(target.name) < 0) {
        changedProfileSettings.changedSettings.push(target.name);
        changedProfileSettings.isChanged =
          changedProfileSettings.changedSettings.length > 0;

        setChangedProfileSettings({
          isChanged: changedProfileSettings.isChanged,
          changedSettings: changedProfileSettings.changedSettings,
        });
      }
    } else {
      const index = changedProfileSettings.changedSettings.indexOf(target.name);

      if (index > -1) {
        changedProfileSettings.changedSettings.splice(index, 1);
        changedProfileSettings.isChanged =
          changedProfileSettings.changedSettings.length > 0;

        setChangedProfileSettings({
          isChanged: changedProfileSettings.isChanged,
          changedSettings: changedProfileSettings.changedSettings,
        });
      }
    }
  };

  const onFormSubmitHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const formElements = e.nativeEvent.srcElement;
    const userUpdatedAttrs = {};
    let newAvatarSrc = "";

    for (const el of formElements) {
      /* filters only changed attributes */
      if (el.tagName === "INPUT") {
        if (el.name === "avatar") {
          if (el.value !== "") newAvatarSrc = el.value;
        } else if (el.name !== el.dataset.initValue) {
          userUpdatedAttrs[el.name] = el.value;
        }
      }
    }

    if (newAvatarSrc) {
      //POST /user/avatar
    }

    if (Object.keys(userUpdatedAttrs).length) {
      //PATCH /user
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
          <S.ProfileSettings onChange={onProfileSettingsChangeHandler}>
            <S.SettingsLeft>
              <ProfileImg src={avatarSrc} />
              <ActionInput
                value=""
                type="file"
                accept="image/*"
                name="avatar"
                label="Заменить"
                onChange={onAvatarValueChangeHandler}
                form={formId}
              />
            </S.SettingsLeft>
            <S.SettingsRight>
              <S.SettingsForm id={formId} onSubmit={onFormSubmitHandler}>
                <S.InputWithLabelShort
                  label="Имя"
                  defaultValue={data.name}
                  name="name"
                  initValue={data.name}
                />
                <S.InputWithLabelShort
                  label="Фамилия"
                  defaultValue={data.surname}
                  name="surname"
                  initValue={data.surname}
                />
                <S.InputWithLabelShort
                  label="Город"
                  defaultValue={data.city}
                  name="city"
                  initValue={data.city}
                />
                <S.InputWithLabelLong
                  label="Телефон"
                  defaultValue={data.phone}
                  name="phone"
                  initValue={data.phone}
                />
                <S.ProfileSaveBtn
                  type="submit"
                  disabled={changedProfileSettings.isChanged ? 0 : 1}
                >
                  Сохранить
                </S.ProfileSaveBtn>
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
