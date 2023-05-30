import React from "react";
import Header from "../../components/header";
import Logo from "../../components/logo";
import InputMain from "../../components/input-main/index";
import * as S from "./style";
import ContainerMain from "../../components/container-main";
import Footer from "../../components/footer";
import ButtonHeader from "../../components/button-header";
import FormMenu from "../../components/form-menu";

export default function Main() {
  return (
    <React.Fragment>
      <Header>
        <ButtonHeader>{"Вход в личный кабинет"}</ButtonHeader>
      </Header>
      <main className="main">
        <S.MainSearch>
          <Logo />
          <FormMenu>
            <InputMain placeholder={"Поиск по объявлениям"}></InputMain>
            <S.ButtonSearch>Найти</S.ButtonSearch>
          </FormMenu>
        </S.MainSearch>
        <ContainerMain />
      </main>
      <Footer></Footer>
    </React.Fragment>
  );
}
