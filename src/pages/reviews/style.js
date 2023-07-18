import styled, { css } from "styled-components";
import { device } from "../../constants";

/* modal__content */
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 800px;
  background-color: #ffffff;

  @media ${device.mobile} {
    width: 100%;
    min-width: 320px;
    padding: 30px 20px 30px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  overflow-y: auto;
  scrollbar-color: #ffffff #2e2e2e;
  scrollbar-width: thin;
  scrollbar-width: 0px;

  ::-webkit-scrollbar {
    width: 0px;
    background-color: #ffffff;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #d9d9d9;
    border-radius: 0px;
  }
`;

export const FormLabels = css`
  margin-bottom: 14px;
  font-size: 16px;
  line-height: 32px;
  font-weight: 600;
  color: #000000;

  @media ${device.mobile} {
    display: none;
  }
`;

export const ReviewsList = styled.div`
  width: 100%;
`;

export const ReviewItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin: 15px 0;
`;

export const ReviewItemContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const ReviewItemContentLeft = styled.div`
  margin-right: 12px;

  div {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #f0f0f0;
    overflow: hidden;
  }

  div img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
    cursor: pointer;
  }
`;

export const ReviewItemContentRight = styled.div`
  display: block;

  font-size: 16px;
  line-height: 32px;
  color: #000000;

  @media ${device.mobile} {
    font-size: 14px;
    line-height: 28px;
  }
`;

export const ReviewItemContentName = styled.p`
  margin-bottom: 4px;
  font-weight: 600;
  font-family: "Noto Sans", sans-serif;

  span:first-of-type {
    cursor: pointer;
  }

  span:last-of-type {
    margin-left: 10px;
    color: #5f5f5f;
    font-weight: 400;
  }
`;

export const ReviewItemContentTitle = styled.h5`
  font-weight: 600;
  font-family: "Noto Sans", sans-serif;
  margin-bottom: -6px;
`;
