import * as S from "./style";
import Header from "../../components/header";
import React from "react";
import HeaderMain from "../../components/header-main";
import Logo from "../../components/logo";
import FormMenu from "../../components/form-menu";
import ButtonMain from "../../components/button-main";
import ArticleCard from "../../components/article-card";

export default function MyAdv(props) {
  return (
    <React.Fragment>
      <Header />
      <main className="main">
        <HeaderMain>
          <Logo />
          <FormMenu>
            <ButtonMain>Вернуться на главную</ButtonMain>
          </FormMenu>
        </HeaderMain>
        <ArticleCard />
      </main>
    </React.Fragment>
  );
}
