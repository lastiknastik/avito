import * as S from "./style";
import ButtonHeader from "../../components/button-header";
import React from "react";
import HeaderMain from "../header-main";
import Logo from "../logo";
import FormMenu from "../form-menu";
import ButtonMain from "../button-main";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setMainGoodsSearchFilter } from "../../store/actions/creators/creators";
import InputMain from "../input-main";
import { useIsAuthenticated, logOut } from "../../libs/auth";
import { useState } from "react";
import Popover from "../popover";
import NewAdv from "../../pages/new-adv";

export default function Header(props) {
  const navigate = useNavigate();
  const isLoggedIn = useIsAuthenticated();
  const onOpenMainBtnClickHandler = (e) => {
    navigate("/");
  };

  const location = useLocation();
  const showAdsFilterBar = location.pathname === "/";
  const showLogOutBtn = location.pathname === "/profile";

  const dispatch = useDispatch();

  const dispathSetMainGoodsSearchFilter = (value) => {
    dispatch(setMainGoodsSearchFilter(value));
  };

  const goodsSearchInputOnKeyDownHandler = (e) => {
    if (e.keyCode === 13) {
      dispathSetMainGoodsSearchFilter(e.target.value);
    }
  };

  const goodsSearchFormSubmitHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const formElements = e.nativeEvent.srcElement;

    let filterValue = "";

    for (const el of formElements) {
      if (el.tagName === "INPUT" && el.id === "search_filter" && el.value) {
        filterValue = el.value;
        break;
      }
    }

    dispathSetMainGoodsSearchFilter(filterValue);
  };

  const onSignInBtnClickHandler = (e) => {
    navigate("/signin");
  };

  const onMyProfileBtnClickHandler = (e) => {
    navigate("/profile");
  };

  const onLogOutBtnClickHandler = (e) => {
    logOut();
  };

  //show Create Advertisment popover
  const [isCreateAdvVisible, setIsCreateAdvVisible] = useState(false);

  const onCreateAdvBtnClickHandler = (e) => {
    setIsCreateAdvVisible(true);
  };

  const onCreateAdvPopoverCloseHandler = (e) => {
    setIsCreateAdvVisible(false);
  };

  return (
    <React.Fragment>
      <S.Header>
        <S.HeaderNav>
          {isLoggedIn ? (
            <React.Fragment>
              <ButtonHeader onClick={onCreateAdvBtnClickHandler}>
                {"Разместить объявление"}
              </ButtonHeader>
              {isCreateAdvVisible && (
                <Popover onClose={onCreateAdvPopoverCloseHandler}>
                  <NewAdv onClose={onCreateAdvPopoverCloseHandler} />
                </Popover>
              )}
              {showLogOutBtn ? (
                <ButtonHeader
                  marginLeft={"10px"}
                  onClick={onLogOutBtnClickHandler}
                >
                  {"Выйти"}
                </ButtonHeader>
              ) : (
                <ButtonHeader
                  marginLeft={"10px"}
                  onClick={onMyProfileBtnClickHandler}
                >
                  {"Личный кабинет"}
                </ButtonHeader>
              )}
            </React.Fragment>
          ) : (
            <ButtonHeader onClick={onSignInBtnClickHandler}>
              {"Вход в личный кабинет"}
            </ButtonHeader>
          )}
        </S.HeaderNav>
        <HeaderMain>
          <Logo />
          {showAdsFilterBar ? (
            <FormMenu onSubmit={goodsSearchFormSubmitHandler}>
              <InputMain
                placeholder={"Поиск по объявлениям"}
                onKeyDown={goodsSearchInputOnKeyDownHandler}
                fieldName="search_filter"
              ></InputMain>
              <S.ButtonSearch>Найти</S.ButtonSearch>
            </FormMenu>
          ) : (
            <FormMenu>
              <ButtonMain onClick={onOpenMainBtnClickHandler}>
                Вернуться на главную
              </ButtonMain>
            </FormMenu>
          )}
        </HeaderMain>
      </S.Header>
    </React.Fragment>
  );
}
