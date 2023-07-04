import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0 41px 30px;
  background: #fff;
  box-sizing: border-box;
  max-height: 80vh;
  overflow: scroll;
`;

export const PopoverCloseBtn = styled.div`
  width: 19px;
  height: 19px;
  object-fit: scale-down;
  position: absolute;
  background-image: url("../close.png");
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
  z-index: 1000;
`;
