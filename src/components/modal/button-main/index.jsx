import * as S from "./style";

export default function ButtonMainModal({ className, children, type }) {
  return (
    <S.ButtonMainModal className={className} type={type}>
      {children}
    </S.ButtonMainModal>
  );
}
