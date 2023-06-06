import styled from "styled-components";
import { device } from "../../constants";

export const FormFieldWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  @media ${device.mobile} {
    flex-direction: column;
    margin-bottom: 18px;
  }

  label > span {
    color: rgba(0, 0, 0, 0.3);
  }
`;
