import * as S from "./style";

export default function ButtonMain({
  className,
  children,
  type,
  disabled,
  onClick,
}) {
  return (
    <S.ButtonMain
      className={className}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </S.ButtonMain>
  );
}
