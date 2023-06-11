import styled, { css } from "styled-components";
import { device } from "../../constants";
import { placeholder } from "../../sharedStyles";
import FormFieldWithLabel from "../../components/form-field-with-label";

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

export const PhotosBar = styled.div`
  width: 500px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  overflow: hidden;

  @media ${device.mobile} {
    width: 278px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    margin: 0px -5px 10px;
    overflow: hidden;
  }
`;

export const PhotosBarItem = styled.div`
  width: 90px;
  height: 90px;
  margin-right: 10px;
  position: relative;
  z-index: 0;

  & img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
    z-index: 2;
  }

  @media ${device.mobile} {
    display: block;
    width: 90px;
    min-width: 90px;
    height: 90px;
    background-color: #f0f0f0;
    margin: 0 5px;

    & img {
      display: block;
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
`;

export const PhotosBarItemCover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #f0f0f0;
  z-index: -1;

  &:after,
  &:before {
    content: "";
    position: absolute;
    width: 30px;
    height: 2px;
    border-radius: 2px;
    background-color: #d9d9d9;
    top: 50%;
    right: calc(50% - (30px / 2));
  }

  &:before {
    transform: rotate(90deg);
  }
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

export const FormFieldPricedWithLabel = styled(FormFieldWithLabel)`
  position: relative;
`;
