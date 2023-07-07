import ButtonMain from "../button-main";
import HeaderSubtitle from "../font-styles/header-subtitle";
import * as S from "./style";

export default function Confirmation({
  onCancel,
  onConfirm,
  isCriticalAction = true,
}) {
  return (
    <S.Confirmation>
      <HeaderSubtitle>{"Снять с публикации"}</HeaderSubtitle>
      <S.ActionsWrapper>
        <S.ButtonMainConfirm
          onClick={onConfirm}
          isCriticalAction={isCriticalAction}
        >
          Подтвердить
        </S.ButtonMainConfirm>
        <ButtonMain onClick={onCancel}>Отмена</ButtonMain>
      </S.ActionsWrapper>
    </S.Confirmation>
  );
}
