import { css } from "styled-components";
import { device } from "./constants";

export const title = css`
  font-size: 32px;
  line-height: 70px;
  font-weight: 500;
  color: #000000;

  @media ${device.mobile} {
    font-size: 18px;
    line-height: 1;
  }
`;

export const placeholder = css`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #0000004d;

  @media ${device.mobile} {
    font-size: 14px;
    line-height: 21px;
    color: #c4c4c4;
  }
`;
