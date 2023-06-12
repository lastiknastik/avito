import styled from "styled-components";
import { device } from "../../constants";

export const MainContainer = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0px 5px;

  @media ${device.mobile} {
    padding: 0 20px 0;
  }
`;

export const MainContentWrapper = styled.div`
  max-width: 1178px;
  padding: 0 0 70px;
  margin: 0 auto;
  padding: 0 5px 70px;

  @media ${device.mobile} {
    width: 100%;
    padding: 55px 0 0px;
    margin: 0 auto;
  }
`;

export const MainConttentLeft = styled.div`
  max-width: 480px;
  margin-right: 54px;

  @media ${device.tablet} {
    margin-right: 20px;
  }
`;

export const MainConttentRight = styled.div`
  max-width: 621px;

  @media ${device.tablet} {
    max-width: 100%;
    width: 100%;
    padding: 0 20px;
  }
`;
