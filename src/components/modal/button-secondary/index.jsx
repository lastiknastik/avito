import * as S from "./style";

export default function ButtonSecondaryModal({ children, className }) {
  return (
    <S.ButtonSecondaryModal className={className}>
      {children}
    </S.ButtonSecondaryModal>
  );
}
