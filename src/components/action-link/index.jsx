import * as S from "./style";

//TODO: may be redundant. to be substituted by input element
export default function ActionLink(props) {
  return (
    <S.ActionLink href="" target="_self">
      {props.children}
    </S.ActionLink>
  );
}
