import styled from "styled-components";
import {
  formControlStyle,
  formControlStyleMobile,
} from "../../../pages/new-adv/style";
import { device } from "../../../constants";
import { placeholder } from "../../../sharedStyles";

export const FormTextArea = styled.textarea`
  ${formControlStyle}
  font-family: 'Roboto', sans-serif;
  width: 100%;
  max-height: 200px;
  font-size: 16px;
  line-height: 24px;
  resize: none;

  ::placeholder {
    ${placeholder}
  }

  @media ${device.mobile} {
    ${formControlStyleMobile}
    font-family: 'Roboto', sans-serif;
    width: 100%;
    max-height: 107px;
  }
`;
