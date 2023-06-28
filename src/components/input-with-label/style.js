import styled from "styled-components";
import { device } from "../../constants";

export const Wrapper = styled.div`
  display: inline-block;
  margin: 0 7px 20px;

  @media ${device.mobile} {
    display: inline-block;
    margin: 0 0px 18px;
  }
`;

export const Label = styled.label`
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  color: #c4c4c4;
  margin-bottom: 4px;
  display: block;

  @media ${device.mobile} {
    font-size: 14px;
    line-height: 21px;
    color: #c4c4c4;
    margin-bottom: 6px;
  }
`;

export const Input = styled.input`
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  padding: 13px 19px;

  :focus {
    outline: none !important;
    border-color: #009ee4;
  }

  ::placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  @media ${device.mobile} {
    border-radius: 30px;
    padding: 9px 17px;

    ::placeholder {
      font-size: 14px;
      line-height: 21px;
    }
  }
`;
