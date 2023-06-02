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
