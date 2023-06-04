import { device } from "../../../constants";
import styled from "styled-components";

export const ButtonSecondaryModal = styled.button`
  width: 100%;
  height: 52px;
  background-color: transparent;
  border: 1px solid #d0cece;
  border-radius: 6px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  color: #000000;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;

  &:active {
    background-color: #d9d9d9;
  }

  &:hover {
    background-color: #f4f5f6;
  }

  @media ${device.tablet} {
    height: 46px;
    border: 1px solid #d9d9d9;
    font-size: 16px;
    line-height: 24px;
  }
`;
