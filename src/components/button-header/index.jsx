import * as S from "./style";
export default function ButtonHeader(props) {
  return (
    <S.ButtonHeader marginLeft={props.marginLeft}>
      {props.children}
    </S.ButtonHeader>
  );
}
