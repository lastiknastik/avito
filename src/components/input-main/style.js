import styled from "styled-components";
import { device } from "../../constants";

export const InputMain = styled.input`
  width: 100%;
  height: 50px;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  background-color: transparent;
  padding: 13px 19px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;

  @media ${device.mobile} {
    display: none;
  }

  &::-webkit-input-placeholder,
  &:-ms-input-placeholder,
  &::-ms-input-placeholder,
  &::placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
`;

export const InputMainMobile = styled.input`
  display: none;

  @media ${device.mobile} {
    display: inline-block;
    width: 100%;
    height: 32px;
    border: none;
    border-radius: 30px;
    background-color: #ffffff;
    padding: 5px 17px;
    font-size: 14px;
    line-height: 21px;
    color: #000000;

    &::-webkit-input-placeholder,
    &:-ms-input-placeholder,
    &::-ms-input-placeholder,
    &::placeholder {
      background-color: transparent;
      color: #b3b3b3;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
    }
  }
`;
