import * as S from "./style";

export default function ButtonMain({ className, children, type, disabled }) {
  return (
    <S.ButtonMain className={className} type={type} disabled={disabled}>
      {children}
    </S.ButtonMain>
  );
}
