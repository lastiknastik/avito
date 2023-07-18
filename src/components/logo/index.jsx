import React from "react";
import * as S from "./style";
import logoDesktop from "../../static/img/logo.png";
import logoMobile from "../../static/img/logo-mob.png";
import { useNavigate } from "react-router-dom";

export default function Logo() {
  const navigate = useNavigate();
  const onLogoClickHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate("/");
  };

  return (
    <React.Fragment>
      <S.Logo>
        <S.LogoImg
          src={logoDesktop}
          alt="logo"
          onClick={onLogoClickHandler}
        ></S.LogoImg>
      </S.Logo>
      <S.LogoMobile>
        <S.LogoImgMobile
          src={logoMobile}
          alt="logo"
          onClick={onLogoClickHandler}
        />
      </S.LogoMobile>
    </React.Fragment>
  );
}
