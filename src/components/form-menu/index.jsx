import * as S from "./style";

export default function FormMenu({ children, onSubmit }) {
  return <S.FormMenu onSubmit={onSubmit}>{children}</S.FormMenu>;
}
