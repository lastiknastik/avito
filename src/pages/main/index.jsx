import React from "react";
import Header from "../../components/header";
import Logo from "../../components/logo";
import InputMain from "../../components/input-main/index";
import * as S from "./style";
import ContainerMain from "../../components/container-main";
import Footer from "../../components/footer";
import FormMenu from "../../components/form-menu";
import HeaderMain from "../../components/header-main";
import { useDispatch } from "react-redux";
import { setMainGoodsSearchFilter } from "../../store/actions/creators/creators";

export default function Main() {
  const dispatch = useDispatch();

  const dispathSetMainGoodsSearchFilter = (value) => {
    dispatch(setMainGoodsSearchFilter(value));
  };

  const goodsSearchInputOnBlurHandle = (e) => {
    dispathSetMainGoodsSearchFilter(e.target.value);
  };

  const goodsSearchInputOnKeyDownHandler = (e) => {
    if (e.keyCode === 13) {
      console.log("enter");
      dispathSetMainGoodsSearchFilter(e.target.value);
      e.target.blur();
    }
  };

  const goodsSearchFormSubmitHandler = (e) => {
    //just preventDefault is enough because blur will be happened anyway
    e.preventDefault();
  };

  return (
    <React.Fragment>
      <Header />
      <main className="main">
        <HeaderMain>
          <Logo />
          <FormMenu onSubmit={goodsSearchFormSubmitHandler}>
            <InputMain
              placeholder={"Поиск по объявлениям"}
              onBlur={goodsSearchInputOnBlurHandle}
              onKeyDown={goodsSearchInputOnKeyDownHandler}
            ></InputMain>
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
