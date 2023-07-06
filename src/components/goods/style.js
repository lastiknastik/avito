import styled from "styled-components";
import { device } from "../../constants";

export const MainContent = styled.div`
  width: 100%;
  margin: 0 auto;

  @media ${device.mobile} {
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    /* position: fixed; 
    right: 0;
    left: 0;
    top: 134px;
    bottom: 84px;
    */
  }
`;

export const ContentCards = styled.div`
  max-width: 1158px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 270px);
  grid-auto-rows: 441px;
  grid-gap: 40px 26px;
  justify-content: center;
  overflow-y: auto;
  scrollbar-color: #ffffff #2e2e2e;
  scrollbar-width: thin;
  scrollbar-width: 0px;

  &::-webkit-scrollbar {
    width: 0px;
    background-color: #009ee4;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #0080c1;
    border-radius: 3px;
  }

  @media ${device.laptop} {
    display: grid;
    grid-template-columns: repeat(3, 270px);
  }

  @media ${device.tablet} {
    display: grid;
    grid-template-columns: repeat(2, 270px);
  }

  @media ${device.mobile} {
    display: -ms-grid;
    display: grid;
    grid-template-columns: repeat(2, 137px);
    grid-auto-rows: 293px;
    grid-gap: 10px 10px;
    justify-content: center;
  }
`;

export const CardItem = styled.div`
  margin: 0;

  @media ${device.mobile} {
    margin: 0;
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
  }
`;

export const Card = styled.div`
  width: 270px;
  height: 441px;
  display: flex;
  flex-direction: column;

  @media ${device.mobile} {
    width: 137px;
    height: 293px;
    display: flex;
    flex-direction: column;
  }
`;

export const CardImg = styled.div`
  width: 270px;
  height: 270px;
  background-color: #f0f0f0;
  cursor: pointer;

  & img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: contain;
  }

  @media ${device.mobile} {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    width: 137px;
    height: 132px;
    background-color: #d9d9d9;

    & img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
    }
  }
`;

export const CardTitle = styled.h3`
  max-height: 52px;
  font-size: 22px;
  font-weight: 500;
  line-height: 26px;
  color: #009ee4;
  margin-bottom: 10px;
  margin-top: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;

  @media ${device.mobile} {
    height: 51px;
    font-size: 14px;
    line-height: 17px;
    color: #009ee4;
    margin-bottom: 10px;
    margin-top: 10px;
  }
`;

export const CardPrice = styled.p`
  color: #000000;
  font-size: 22px;
  font-weight: 500;
  line-height: 33px;
  margin-bottom: 10px;

  @media ${device.mobile} {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const CardPlace = styled.p`
  margin-bottom: 4px;

  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;

  @media ${device.mobile} {
    font-size: 12px;
    line-height: 16px;
    color: #5f5f5f;
  }
`;

export const CardDate = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;

  @media ${device.mobile} {
    font-size: 12px;
    line-height: 16px;
    color: #5f5f5f;
  }
`;
