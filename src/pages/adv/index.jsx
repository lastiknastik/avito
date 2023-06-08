import React from "react";
import Header from "../../components/header";
import ButtonHeader from "../../components/button-header";
import Footer from "../../components/footer";
import Logo from "../../components/logo";
import FormMenu from "../../components/form-menu";
import ButtonMain from "../../components/button-main";
import ArticleCard from "../../components/article-card";

import HeaderMain from "../../components/header-main";

export default function Adv() {
  return (
    <React.Fragment>
      <Header>
        <ButtonHeader>{"Разместить объявление"}</ButtonHeader>
        <ButtonHeader marginLeft={"10px"}>{"Личный кабинет"}</ButtonHeader>
      </Header>
      <main className="main">
        <HeaderMain>
          <Logo />
          <FormMenu>
            <ButtonMain>Вернуться на главную</ButtonMain>
          </FormMenu>
        </HeaderMain>
        <ArticleCard />
      </main>
      <Footer />
    </React.Fragment>
  );
}
