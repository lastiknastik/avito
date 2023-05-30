import styled from "styled-components";
import { device } from "../../constants";
import ButtonMain from "../../components/button-main";

export const MainSearch = styled.div`
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 11px 0;
  max-width: 1178px;
  margin: 0 auto;
  padding: 31px 10px 0px;

  @media ${device.mobile} {
    width: 100%;
    height: 55px;
    background-color: #009ee4;
    -webkit-box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
    margin-bottom: 0px;
    padding: 11px 17px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 3;
  }
`;

export const ButtonSearch = styled(ButtonMain)`
  margin-left: 10px;
  width: 158px;
`;
