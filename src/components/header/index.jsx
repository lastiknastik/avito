import * as S from "./style";
import ButtonHeader from "../button-header";
export default function Header(props) {
  return (
    <S.Header>
      <S.HeaderNav>{props.children}</S.HeaderNav>
    </S.Header>
  );
}
