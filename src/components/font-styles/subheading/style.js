import styled from "styled-components";
import { device } from "../../../constants";

export const Subheading = styled.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 40px;
  color: #000000;
  margin-bottom: 0px;

  @media ${device.mobile} {
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 6px;
  }
`;
