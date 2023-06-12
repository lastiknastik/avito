import styled from "styled-components";
import { device } from "../../constants";
import HeaderSubtitle from "../font-styles/header-subtitle";

export const Main = styled.div`
  max-width: 1178px;
  padding: 0 0 70px;
  margin: 0 auto;
  padding: 0 5px 70px;

  @media ${device.tablet} {
    max-width: 1178px;
    width: 100%;
    padding: 55px 0 0px;
    margin: 0 auto;
  }
`;

export const Content = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  align-items: top;
  justify-content: center;

  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const HeaderSubtitleNoMarginBottom = styled(HeaderSubtitle)`
  margin-bottom: 10px;
  line-height: 46px;
`;

export const ContentLeft = styled.div`
  max-width: 480px;
  margin-right: 54px;

  @media ${device.tablet} {
    max-width: 100%;
    width: 100%;
    min-width: 320px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

export const ArticleImgWrapper = styled.div`
  :hover::before {
    border-top: 2px solid #0080c1;
    border-left: 2px solid #0080c1;
  }

  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.tablet} {
    max-width: 100%;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    ::before {
      content: "";
      display: block;
      width: 23px;
      height: 23px;
      background-color: transparent;
      border-top: 2px solid #000000;
      border-left: 2px solid #000000;
      transform: rotate(-45deg);
      position: absolute;
      top: 24px;
      left: 32px;
      cursor: pointer;
    }
  }
`;

export const ArticleImg = styled.div`
  width: 480px;
  height: 480px;
  background-color: #f0f0f0;
  margin: 0 5px;

  & img {
    width: 100%;
    height: auto;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
  }

  @media ${device.tablet} {
    width: 100%;
    min-width: 320px;
    height: auto;
    min-height: 320px;
    margin: 0 0px;
  }
`;

export const ArticleImgBar = styled.div`
  margin-top: 30px;
  width: 490px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  overflow: hidden;
  margin-left: -5px;

  @media ${device.tablet} {
    display: none;
  }
`;

export const ArticleImgBarItem = styled.div`
  width: 88px;
  min-width: 88px;
  height: 88px;
  background-color: #f0f0f0;
  border: 2px solid #f0f0f0;
  margin: 0 5px;

  & img {
    width: 100%;
    height: auto;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
  }
`;

export const ArticleImgBarMob = styled.div`
  display: none;

  @media ${device.tablet} {
    display: block;
    width: 68px;
    height: 8px;
    position: absolute;
    bottom: 20px;
    left: calc(50% - (68px / 2));
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
  }
`;

export const ArticleImgBarItemCircle = styled.div`
  :active {
    background-color: #ffffff;
  }

  @media ${device.tablet} {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 1px solid #ffffff;
  }
`;

export const ContentRight = styled.div`
  max-width: 621px;

  @media ${device.tablet} {
    max-width: 100%;
    width: 100%;
    padding: 0 20px;
  }
`;

export const ArticleInfoWrapper = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
`;

export const ArticleInfo = styled.div`
  margin-bottom: 34px;

  @media ${device.tablet} {
    margin-bottom: 20px;
  }
`;

export const ArticleInfoDate = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;
  margin-bottom: 4px;

  @media ${device.tablet} {
    font-size: 14px;
    line-height: 17px;
    color: #5f5f5f;
    margin-bottom: 4px;
  }
`;

export const ArticleInfoCity = ArticleInfoDate;

export const ArticleInfoLink = styled.a`
  font-size: 16px;
  line-height: 21px;
  color: #009ee4;

  @media ${device.tablet} {
    font-size: 14px;
    line-height: 19px;
    color: #009ee4;
  }
`;

export const ArticleInfoPrice = styled.p`
  font-size: 28px;
  line-height: 39px;
  font-weight: 700;
  margin-bottom: 20px;

  @media ${device.tablet} {
    font-size: 18px;
    line-height: 25px;
    font-weight: 700;
    margin-bottom: 20px;
  }
`;

/*
export const ArticleActionBtn = styled.button`
  background-color: #009ee4;
  border-radius: 6px;
  border: 1px solid #009ee4;
  width: 214px;
  height: 62px;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  color: #ffffff;
  font-family: "Roboto", sans-serif;

  & span {
    display: block;
    font-size: 14px;
    font-weight: 400;
    white-space: nowrap;
  }

  :hover {
    background-color: #0080c1;
  }

  @media ${device.tablet} {
    width: 100%;
    height: 57px;
    font-size: 14px;
    line-height: 20px;
    color: #ffffff;

    & span {
      font-size: 12px;
    }
  }
`;
*/

export const ArticleActionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

  @media ${device.mobile} {
    flex-direction: column;
  }
`;

export const ArticleAuthor = styled.div`
  margin-top: 34px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  @media ${device.tablet} {
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;

export const AuthorImg = styled.div`
  width: 40px;
  height: 40px;
  background-color: #f0f0f0;
  border-radius: 50%;

  & img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
  }
`;

export const AuthorInfo = styled.div`
  margin-left: 12px;
`;

export const AuthorName = styled.p`
  font-size: 20px;
  line-height: 26px;
  font-weight: 600;
  color: #009ee4;

  @media ${device.tablet} {
    font-size: 18px;
    line-height: 23px;
    font-weight: 600;
  }
`;

export const AuthorAbout = styled.p`
  font-size: 16px;
  line-height: 32px;
  color: #5f5f5f;

  @media ${device.tablet} {
    font-size: 14px;
    line-height: 28px;
  }
`;

export const ArticleDescription = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0px 5px;

  @media ${device.tablet} {
    padding: 0 20px 0;
  }
`;

export const ArticleDescriptionContent = styled.div`
  max-width: 792px;
  width: 100%;
  padding: 0 5px 117px;

  @media ${device.tablet} {
    width: 100%;
    margin: 0 auto;
    padding: 0 0 84px;
  }
`;

export const ArticleDescriptionText = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`;
