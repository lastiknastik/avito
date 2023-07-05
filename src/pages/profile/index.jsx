import Header from "../../components/header";
import Footer from "../../components/footer";
import * as S from "./style";
import HeaderTitle from "../../components/font-styles/header-title";
import HeaderSubtitle from "../../components/font-styles/header-subtitle";
import ProfileImg from "../../components/profile-img";
import Goods from "../../components/goods";
import {
  useGetUserQuery,
  usePatchUserMutation,
  usePostUserAvatarMutation,
  useGetMyAdsQuery,
} from "../../services/skyvitoSrvcAPI";
import React from "react";
import ActionInput from "../../components/action-input";
import { SKYVITO_API_BASE_URL } from "../../constants";
import { useState } from "react";

function ProfileContent({ data }) {
  const [patchUser] = usePatchUserMutation();
  const [postUserAvatar] = usePostUserAvatarMutation();

  const formId = "profile_form";
  //set default value for avatar src
  const [avatarSrc, setAvatarSrc] = useState({
    value: "",
    src: data.avatar ? `${SKYVITO_API_BASE_URL}${data.avatar}` : null,
  });

  //display preview of selected image
  const onAvatarValueChangeHandler = (e) => {
    if (e.target.files && e.target.files[0]) {
      setAvatarSrc({
        value: e.target.files[0],
        src: URL.createObjectURL(e.target.files[0]),
      });
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
    } else if (target.name !== "avatar") {
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

    for (const el of formElements) {
      /* filters only changed attributes */
      if (el.tagName === "INPUT") {
        if (el.name !== "avatar" && el.value !== el.dataset.initValue) {
          userUpdatedAttrs[el.name] = el.value;
        }
      }
    }

    if (avatarSrc.value) {
      //POST /user/avatar
      const reader = new FileReader();
      reader.onload = function () {
        const fileToSave = reader.result;

        postUserAvatar({ avatarImg: fileToSave });
      };
      reader.readAsBinaryString(avatarSrc.value);
    }

    if (Object.keys(userUpdatedAttrs).length) {
      //PATCH /user
      patchUser(userUpdatedAttrs)
        .unwrap()
        .then((payload) => {
          for (const key in payload) {
            const index = changedProfileSettings.changedSettings.indexOf(key);

            if (index > -1) {
              changedProfileSettings.changedSettings.splice(index, 1);
            }
          }

          changedProfileSettings.isChanged =
            changedProfileSettings.changedSettings.length > 0;

          setChangedProfileSettings({
            isChanged: changedProfileSettings.isChanged,
            changedSettings: changedProfileSettings.changedSettings,
          });
        })
        .catch((error) => console.error(error));
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
              <ProfileImg src={avatarSrc.src} />
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
  const { isSuccess, data } = useGetUserQuery({
    skip: false,
  });

  const {
    data: myGoods,
    isError: myGoods_isError,
    isLoading: myGoods_isLoading,
    isSuccess: myGoods_isSuccess,
  } = useGetMyAdsQuery({}, { skip: false });

  return (
    <React.Fragment>
      <Header />
      <main className="main">
        <S.MainContainer>
          <S.MainCenterBlock>
            {isSuccess ? (
              <ProfileContent data={data} />
            ) : (
              <p>Profile is loading</p>
            )}

            <HeaderSubtitle>Мои товары</HeaderSubtitle>
          </S.MainCenterBlock>
          {myGoods_isLoading ? (
            <p>Goods are loading</p>
          ) : myGoods_isError ? (
            <p>Goods loading failed</p>
          ) : myGoods_isSuccess ? (
            <Goods goods={myGoods} />
          ) : (
            <p>Something went wrong</p>
          )}
        </S.MainContainer>
      </main>
      <Footer />
    </React.Fragment>
  );
}
