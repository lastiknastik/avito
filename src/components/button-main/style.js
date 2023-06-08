import styled from "styled-components";
import { device } from "../../constants";
import { FormModal } from "../../pages/new-adv/style";
import { SettingsRight } from "../../pages/seller-profile/style";

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

  ${FormModal} & {
    width: fit-content;
  }

  ${SettingsRight} & span {
    display: block;
    font-size: 14px;
    font-weight: 400;
  }

  ${SettingsRight} & {
    margin-top: 20px;
    height: 62px;
  }

  /* the order is important. media does not change specificity
  therefore selectors has the same priority but the letest in
  css file will take the precedence */
  @media ${device.mobile} {
    ${SettingsRight} & {
      display: block;
      width: 100%;
    }

    ${SettingsRight} & span {
      font-size: 12px;
    }

    & {
      display: none;
    }
  }
`;
