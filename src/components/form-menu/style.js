import styled from "styled-components";
import { device } from "../../constants";
import { Content, FormLabels } from "../../pages/reviews/style";

export const FormMenu = styled.form`
  margin-left: 60px;
  max-width: 1044px;
  width: 100%;
  display: flex;

  ${Content} & {
    margin-top: 5px;
    margin-bottom: 15px;
    margin-left: 0px;
    flex-direction: column;
    width: 100%;
  }

  ${Content} & label {
    ${FormLabels}
  }

  @media ${device.mobile} {
    ${Content} & {
      margin-top: 22px;
    }

    margin-left: 10px;
  }
`;
