import styled from "styled-components";
import { device } from "../../../constants";

export const ParagraphInfo = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;
  margin-bottom: 10px;

  @media ${device.mobile} {
    font-size: 16px;
    line-height: 21px;
    color: #5f5f5f;
    margin-bottom: 6px;
  }
`;
