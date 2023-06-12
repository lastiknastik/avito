import * as S from "./style";
import ButtonHeader from "../../components/button-header";
import React from "react";

export default function Header(props) {
  const isLoggedIn = true; //TODO: substitute with real data

  return (
    <React.Fragment>
      <S.Header>
        <S.HeaderNav>
          {isLoggedIn ? (
            <React.Fragment>
              <ButtonHeader>{"Разместить объявление"}</ButtonHeader>
              <ButtonHeader marginLeft={"10px"}>
                {"Личный кабинет"}
              </ButtonHeader>
            </React.Fragment>
          ) : (
            <ButtonHeader>{"Вход в личный кабинет"}</ButtonHeader>
          )}
        </S.HeaderNav>
      </S.Header>
    </React.Fragment>
  );
}
