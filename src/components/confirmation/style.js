import styled from "styled-components";
import ButtonMain from "../button-main";

export const Confirmation = styled.div`
  width: 350px;
`;

export const ActionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ButtonMainConfirm = styled(ButtonMain)`
  background-color: ${(props) =>
    props.isCriticalAction ? "#e0474c" : "#e0474c"};

  &:hover {
    background-color: ${(props) =>
      props.isCriticalAction ? "#EB4E3F" : "#e0474c"};
  }
`;
