import FormFieldWithLabel from "../../../components/form-field-with-label/index";
import styled from "styled-components";
import { formControlStyle, formControlStyleMobile } from "../style";
import { device } from "../../../constants";

export const FormFieldPricedWithLabel = styled(FormFieldWithLabel)`
  position: relative;
`;

export const PriceInput = styled.input`
  ${formControlStyle}
  width: 200px;
  font-size: 16px;
  line-height: 24px;
  color: #000000;

  @media ${device.mobile} {
    ${formControlStyleMobile}
    width: 100%;
  }
`;

export const PriceInputCover = styled.div`
  width: 24px;
  height: 24px;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  position: absolute;
  bottom: 13px;
  left: 170px;
  z-index: 0;
  background-color: #ffffff;

  ::after {
    content: "₽";
    width: 24px;
    height: 24px;
    position: absolute;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    z-index: 2;
  }

  @media ${device.mobile} {
    width: 21px;
    height: 21px;
    font-size: 14px;
    line-height: 21px;
    bottom: 9px;
    left: auto;
    right: 18px;

    ::after {
      font-size: 14px;
      line-height: 21px;
    }
  }
`;
