import * as S from "./style";
import React from "react";

export default function InputMain(props) {
  return (
    <React.Fragment>
      <S.InputMain placeholder={props.placeholder}></S.InputMain>
      <S.InputMainMobile placeholder={props.placeholder}></S.InputMainMobile>
    </React.Fragment>
  );
}
