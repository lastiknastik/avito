import * as S from "./style";

export default function ActionLink(props) {
  return (
    <S.ActionLink href="" target="_self">
      {props.children}
    </S.ActionLink>
  );
}
