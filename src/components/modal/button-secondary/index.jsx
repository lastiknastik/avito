import * as S from "./style";

export default function ButtonSecondaryModal({ children, className, onClick }) {
  return (
    <S.ButtonSecondaryModal className={className} onClick={onClick}>
      {children}
    </S.ButtonSecondaryModal>
  );
}
