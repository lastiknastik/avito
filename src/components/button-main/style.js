import styled from "styled-components";
import { device } from "../../constants";
import { FormModal } from "../../pages/new-adv/style";
import { SettingsRight } from "../../pages/seller-profile/style";
import { Content } from "../../pages/reviews/style";
import { ArticleActionsWrapper } from "../article-card/style";

export const ButtonMain = styled.button`
  background-color: #009ee4;
  border: 1px solid #009ee4;
  border-radius: 6px;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  padding: 10px 36px;
  width: fit-content;

  &:hover {
    background-color: #0080c1;
  }

  /*
  ${FormModal} &, ${Content} & {
    width: fit-content;
  }
  */

  ${SettingsRight} & span {
    display: block;
    font-size: 14px;
    font-weight: 400;
  }

  ${SettingsRight} & {
    margin-top: 20px;
    height: 62px;
  }

  ${ArticleActionsWrapper} & span {
    display: block;
    font-size: 14px;
    font-weight: 400;
    white-space: nowrap;
  }

  /* the order is important. media does not change specificity
  therefore selectors has the same priority but the letest in
  css file will take the precedence */
  @media ${device.mobile} {
    ${SettingsRight} & {
      display: block;
      width: 100%;
    }

    ${SettingsRight} & span, ${ArticleActionsWrapper} & span {
      font-size: 12px;
    }

    ${ArticleActionsWrapper} & {
      display: block;
      width: 100%;
    }

    & {
      display: none;
    }
  }
`;
