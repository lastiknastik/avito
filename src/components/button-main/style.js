import styled from "styled-components";
import { device } from "../../constants";
import { FormModal } from "../../pages/new-adv/style";

export const ButtonMain = styled.button`
  height: 50px;
  background-color: #009ee4;
  border: 1px solid #009ee4;
  border-radius: 6px;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  padding-left: 36px;
  padding-right: 36px;

  &:hover {
    background-color: #0080c1;
  }

  @media ${device.mobile} {
    display: none;
  }

  ${FormModal} & {
    width: fit-content;
  }
`;
