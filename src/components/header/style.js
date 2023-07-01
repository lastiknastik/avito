import styled from "styled-components";
import { device } from "../../constants";
import ButtonMain from "../button-main";

export const Header = styled.header`
  @media ${device.mobile} {
    display: none;
  }
`;
export const HeaderNav = styled.nav`
  background-color: #009ee4;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 10px;
  height: 79px;
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const ButtonSearch = styled(ButtonMain)`
  margin-left: 10px;
  width: 158px;
`;
