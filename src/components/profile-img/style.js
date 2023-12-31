import styled from "styled-components";
import { device } from "../../constants";

export const ProfileImg = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-color: #f0f0f0;
  overflow: hidden;

  & img {
    width: 100%;
    height: auto;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
    border-radius: 50%;
  }

  @media ${device.mobile} {
    width: 132px;
    height: 132px;
  }
`;
