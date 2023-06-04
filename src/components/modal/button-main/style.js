import ButtonMain from "../../button-main";
import styled from "styled-components";
import { device } from "../../../constants";

export const ButtonMainModal = styled(ButtonMain)`
  width: 100%;
  height: 52px;
  margin-top: 60px;
  margin-bottom: 20px;
  font-size: 18px;

  &:active {
    background-color: #0080c1;
  }

  @media ${device.tablet} {
    height: 46px;
    margin-top: 40px;
    margin-bottom: 10px;
    font-size: 16px;
    line-height: 24px;
  }
`;
