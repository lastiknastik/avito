import React from "react";
import Header from "../../components/header";
import Logo from "../../components/logo";
import InputMain from "../../components/input-main/index";
import * as S from "./style";
import ContainerMain from "../../components/container-main";
import Footer from "../../components/footer";
import FormMenu from "../../components/form-menu";
import HeaderMain from "../../components/header-main";

export default function Main() {
  return (
    <React.Fragment>
      <Header />
      <main className="main">
        <HeaderMain>
          <Logo />
          <FormMenu>
            <InputMain placeholder={"Поиск по объявлениям"}></InputMain>
            <S.ButtonSearch>Найти</S.ButtonSearch>
          </FormMenu>
        </HeaderMain>
        {/* TODO: get rid of ContainerMain: move it to local styled components */}
        <ContainerMain />
      </main>
      <Footer></Footer>
    </React.Fragment>
  );
}
