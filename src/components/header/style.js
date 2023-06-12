import styled from "styled-components";
import { device } from "../../constants";

export const Header = styled.header`
  background-color: #009ee4;

  @media ${device.mobile} {
    display: none;
  }
`;
export const HeaderNav = styled.nav`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0 10px;
  height: 79px;
  display: flex;
  align-items: center;
  justify-content: end;
`;
