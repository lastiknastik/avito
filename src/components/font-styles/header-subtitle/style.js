import styled from "styled-components";
import { title } from "../../../sharedStyles";
import { Wrapper } from '../../../pages/new-adv/style'

export const HeaderSubtitle = styled.h3`
  margin-bottom: 20px;
  ${title}

  ${Wrapper} & {
    margin-block-end: 0;
  }
`;
