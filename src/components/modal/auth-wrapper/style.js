import styled from "styled-components";
import { device } from "../../../constants";
import { LayoutStack } from "../../layouts/stack/style";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
`;

export const ConteinerEnter = styled.div`
  max-width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  background-color: #f4f5f6;
`;

export const ModalBlock = styled.div`
  z-index: 2;
  margin: auto;
  opacity: 1;
`;

export const SignInForm = styled.form`
  width: 366px;
  background-color: #ffffff;
  border-radius: 12px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 40px;

  @media ${device.tablet} {
    width: 320px;
    height: auto;
    background-color: #ffffff;
    border-radius: 0px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 40px 20px;
  }

  ${LayoutStack} {
    gap: 30px;

    @media ${device.tablet} {
      gap: 14px;
    }
  }
`;
