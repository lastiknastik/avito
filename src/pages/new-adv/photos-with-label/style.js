import styled from "styled-components";
import { device } from "../../../constants";

export const PhotosBar = styled.div`
  width: 500px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  overflow: hidden;

  @media ${device.mobile} {
    width: 278px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    margin: 0px -5px 10px;
    overflow: hidden;
  }
`;

export const PhotosBarItem = styled.div`
  width: 90px;
  height: 90px;
  background-size: 100px; /* let it overflow for a bit */
  margin-right: 10px;
  position: relative;
  z-index: 0;
  cursor: pointer;
  padding: 8px;
  background-color: rgb(240, 240, 240);
  border: 2px solid rgb(240, 240, 240);
  box-sizing: border-box;

  @media ${device.mobile} {
    display: block;
    width: 90px;
    min-width: 90px;
    height: 90px;
    background-color: #f0f0f0;
    margin: 0 5px;
  }
`;

export const PhotosBarItemCover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #f0f0f0;
  z-index: -1;

  &:after,
  &:before {
    content: "";
    position: absolute;
    width: 30px;
    height: 2px;
    border-radius: 2px;
    background-color: #d9d9d9;
    top: 50%;
    right: calc(50% - (30px / 2));
  }

  &:before {
    transform: rotate(90deg);
  }

  & input {
    display: none;
  }
`;
