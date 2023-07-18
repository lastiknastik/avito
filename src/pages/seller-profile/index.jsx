import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import * as S from "./style";
import HeaderTitle from "../../components/font-styles/header-title";
import HeaderSubtitle from "../../components/font-styles/header-subtitle";
import ProfileImg from "../../components/profile-img";
import Goods from "../../components/goods";
import Subheading from "../../components/font-styles/subheading";
import ParagraphInfo from "../../components/font-styles/paragraph-info";
import { useParams } from "react-router-dom";
import {
  useGetUsersAllQuery,
  useGetAdsQuery,
} from "../../services/skyvitoSrvcAPI";
import { formatSellsFrom } from "../../libs/utils";
import ButtonPhone from "../../components/button-phone";

export default function Profile() {
  const { id } = useParams();

  const {
    data: goods,
    isError: goods_isError,
    isLoading: goods_isLoading,
    isSuccess: goods_isSuccess,
  } = useGetAdsQuery({}, { skip: false });

  const {
    data: usersAll,
    isError: usersAll_isError,
    isLoading: usersAll_isLoading,
    isSuccess: usersAll_isSuccess,
  } = useGetUsersAllQuery({}, { skip: false });

  let sellerProfile = null;
  if (usersAll_isSuccess) {
    sellerProfile = usersAll.find((p) => parseInt(p.id) === parseInt(id));
  }

  return (
    <React.Fragment>
      <Header />
      <main className="main">
        <S.MainContainer>
          <S.MainCenterBlock>
            <HeaderTitle>{"Профиль продавца"}</HeaderTitle>
            {usersAll_isLoading ? (
              <p>User Profile is Loading</p>
            ) : usersAll_isError ? (
              <p>User Profile loading Failed</p>
            ) : (
              usersAll_isSuccess && (
                <S.MainProfile>
                  <S.ProfileContent>
                    <S.ProfileSettings>
                      <S.SettingsLeft>
                        <ProfileImg src={sellerProfile.avatar} />
                      </S.SettingsLeft>
                      <S.SettingsRight>
                        <Subheading>
                          {`${sellerProfile.name} ${
                            sellerProfile.surname ?? ""
                          }`.trim()}
                        </Subheading>
                        <ParagraphInfo>
                          {sellerProfile.city ?? ""}
                        </ParagraphInfo>
                        <ParagraphInfo>
                          {`Продает товары с ${formatSellsFrom(
                            sellerProfile.sells_from
                          )}`}
                        </ParagraphInfo>
                        <S.SellerImgMobileWrapper>
                          <S.SellerImgMobileContent>
                            <a href="/" target="_self" alt="seller-mobile">
                              <img src="#" alt="" />
                            </a>
                          </S.SellerImgMobileContent>
                        </S.SellerImgMobileWrapper>
                        {sellerProfile.phone && (
                          <ButtonPhone phoneNumber={sellerProfile.phone} />
                        )}
                      </S.SettingsRight>
                    </S.ProfileSettings>
                  </S.ProfileContent>
                </S.MainProfile>
              )
            )}
            <HeaderSubtitle>{"Товары продавца"}</HeaderSubtitle>
          </S.MainCenterBlock>
          {
            /* check goods loaing state*/
            goods_isLoading ? (
              <p>Goods are loading</p>
            ) : goods_isError ? (
              <p>Goods loading failed</p>
            ) : goods_isSuccess ? (
              <Goods
                goods={goods.filter((g) => {
                  //had to do this because API does not provide filtration on server side
                  return parseInt(g.user.id) === parseInt(id);
                })}
              />
            ) : (
              <p>Something went wrong</p>
            )
          }
        </S.MainContainer>
      </main>
      <Footer />
    </React.Fragment>
  );
}
