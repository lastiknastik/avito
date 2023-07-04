import styled, { css } from "styled-components";
import { device } from "../../constants";
import { placeholder } from "../../sharedStyles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 600px;
  background-color: #ffffff;

  @media ${device.mobile} {
    width: 100%;
    min-width: 320px;
    padding: 30px 20px 30px;
  }
`;

export const FormModal = styled.form`
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  width: 100%;

  & label {
    margin-bottom: 4px;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
  }

  @media ${device.mobile} {
    & label {
      margin-bottom: 5px;
      font-size: 14px;
      line-height: 21px;
      color: #000000;
    }
  }
`;

export const formControlStyle = css`
  padding: 13px 19px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  font-size: 16px;
  line-height: 1;
`;

export const formControlStyleMobile = css`
  padding: 9px 17px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  font-size: 16px;
  line-height: 1;
`;

export const FormInput = styled.input`
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  ${formControlStyle}

  ::placeholder {
    ${placeholder}
  }

  @media ${device.mobile} {
    width: 100%;
  }
`;
