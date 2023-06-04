import styled from "styled-components";
import { device } from "../../../constants";

export const LogoModal = styled.div`
  width: 140px;
  height: 21px;
  margin-bottom: 34px;
  background-color: transparent;

  & img {
    width: 140px;
    height: auto;
  }

  @media ${device.tablet} {
    width: 120px;
    height: 18px;
    margin-bottom: 30px;
    background-color: transparent;

    & img {
      width: 120px;
      height: auto;
    }
  }
`;
