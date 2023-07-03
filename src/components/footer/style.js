import styled from "styled-components";
import { device } from "../../constants";

export const Footer = styled.footer`
  display: none;

  @media ${device.mobile} {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 3;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    height: 54px;
    width: 100%;
    background-color: #ffffff;
    -webkit-box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.1);
  }
`;

export const FooterContainer = styled.div`
  @media ${device.mobile} {
    width: 225px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const FooterImg = styled.div`
  @media ${device.mobile} {
    width: 42px;
    height: 42px;

    & img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
      cursor: pointer;
    }
  }
`;
