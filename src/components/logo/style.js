import styled from "styled-components";
import { device } from "../../constants";

export const Logo = styled.a`
  height: 50px;
  @media ${device.mobile} {
    display: none;
  }
`;

export const LogoImg = styled.img`
  width: 54px;
  height: auto;
`;

export const LogoMobile = styled.a`
  display: none;

  @media ${device.mobile} {
    display: block;
    width: 32px;
    height: 32px;
  }
`;

export const LogoImgMobile = styled.img`
  @media ${device.mobile} {
    width: 32px;
    height: auto;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
  }
`;
