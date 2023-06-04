import * as S from "./style";

export default function LayoutStack({ children, className }) {
  return <S.LayoutStack className={className}>{children}</S.LayoutStack>;
}
