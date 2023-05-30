import styled from "styled-components";
import { device } from "../../constants";

export const ContainerMain = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 52px 10px 37px;

  @media ${device.mobile} {
    padding: 85px 10px 84px;
  }
`;
