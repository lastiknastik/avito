import styled from "styled-components";
import { device } from "../../constants";

export const ProfileImg = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-color: #f0f0f0;

  & img {
    width: 100%;
    height: auto;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
  }

  @media ${device.mobile} {
    width: 132px;
    height: 132px;
  }
`;
