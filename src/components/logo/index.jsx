import React from "react";
import * as S from "./style";
export default function Logo() {
  return (
    <React.Fragment>
      <S.Logo>
        <S.LogoImg src="./logo.png" alt="logo"></S.LogoImg>
      </S.Logo>
      <S.LogoMobile>
        <S.LogoImgMobile src="./logo-mob.png" alt="logo" />
      </S.LogoMobile>
    </React.Fragment>
  );
}
