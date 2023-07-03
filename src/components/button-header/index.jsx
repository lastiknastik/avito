import * as S from "./style";
export default function ButtonHeader(props) {
  return (
    <S.ButtonHeader marginLeft={props.marginLeft} onClick={props.onClick}>
      {props.children}
    </S.ButtonHeader>
  );
}
