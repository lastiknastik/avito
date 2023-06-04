import styled from "styled-components";
import { device } from "../../../constants";
import { css } from "styled-components";

const placeholderDesctop = css`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  color: #d0cece;
`;

const placeholderMobile = css`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #b3b3b3;
`;

export const InputModal = styled.input`
  width: 100%;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #d0cece;
  padding: 8px 1px;

  &::placeholder {
    ${placeholderDesctop}
  }

  &::-webkit-input-placeholder {
    ${placeholderDesctop}
  }

  &:-ms-input-placeholder {
    ${placeholderDesctop}
  }

  &::-ms-input-placeholder {
    ${placeholderDesctop}
  }

  @media ${device.tablet} {
    width: 100%;
    border: 1px solid #d0cece;
    padding: 9px 17px;
    border-radius: 30px;

    &::-webkit-input-placeholder {
      ${placeholderMobile}
    }

    &:-ms-input-placeholder {
      ${placeholderMobile}
    }

    &::-ms-input-placeholder {
      ${placeholderMobile}
    }

    &::placeholder {
      ${placeholderMobile}
    }
  }
`;
