import React from "react";
import * as S from "./style";
import logoDesktop from "../../static/img/logo.png";
import logoMobile from "../../static/img/logo-mob.png";

export default function Logo() {
  return (
    <React.Fragment>
      <S.Logo>
        <S.LogoImg src={logoDesktop} alt="logo"></S.LogoImg>
      </S.Logo>
      <S.LogoMobile>
        <S.LogoImgMobile src={logoMobile} alt="logo" />
      </S.LogoMobile>
    </React.Fragment>
  );
}
