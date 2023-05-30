import styled from "styled-components";

export const ButtonHeader = styled.button`
  padding-left: 23.5px;
  padding-right: 23.5px;
  height: 40px;
  border: 1px solid #ffffff;
  border-radius: 6px;
  background-color: transparent;
  color: #ffffff;
  font-size: 16px;
  line-height: 1;
  margin-left: ${(props) => props.marginLeft};
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid #ffffff;
  }
`;
