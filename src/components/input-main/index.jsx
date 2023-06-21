import * as S from "./style";
import React from "react";

export default function InputMain({ placeholder, onBlur, onKeyDown }) {
  return (
    <React.Fragment>
      <S.InputMain
        placeholder={placeholder}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
      ></S.InputMain>
      <S.InputMainMobile
        placeholder={placeholder}
        onBlur={onBlur}
      ></S.InputMainMobile>
    </React.Fragment>
  );
}
