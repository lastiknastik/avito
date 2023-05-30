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
