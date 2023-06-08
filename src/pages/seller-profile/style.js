import styled from "styled-components";
import { device } from "../../constants";

//TODO: вынести в компонент. используется в article
export const MainContainer = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0px 10px 79px;

  @media ${device.tablet} {
    padding: 85px 0px 84px;
  }

  @media ${device.mobile} {
    padding: 85px 0px 84px;
  }
`;

//TODO: вынести в компонент. используется в article
export const MainCenterBlock = styled.div`
  @media ${device.mobile} {
    margin: 0 auto;
    padding: 0 20px;
  }

  @media ${device.tablet} {
    margin: 0 auto;
    padding: 0 20px;
  }
`;

export const MainProfile = styled.div`
  width: 100%;
  padding: 0 0 70px;
  @media ${device.mobile} {
    width: 100%;
    padding: 0 0 40px;
  }
`;

export const ProfileContent = styled.div`
  max-width: 834px;
  @media ${device.tablet} {
    max-width: 834px;
    width: 100%;
  }
`;

export const ProfileSettings = styled.div`
  display: flex;
  align-items: top;
  justify-content: center;

  @media ${device.tablet} {
    flex-wrap: wrap;
  }
`;

export const SettingsLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 43px;

  @media ${device.mobile} {
    display: none;
    margin-right: 0;
  }
`;

export const SettingsRight = styled.div`
  width: 630px;
  @media ${device.mobile} {
    width: 100%;
  }
`;

export const SellerImgMobileWrapper = styled.div`
  display: none;

  @media ${device.mobile} {
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 20px 0;
  }
`;

export const SellerImgMobileContent = styled.div`
  display: block;
  width: 132px;
  height: 132px;
  border-radius: 50%;
  background-color: #f0f0f0;

  & img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
  }
`;
