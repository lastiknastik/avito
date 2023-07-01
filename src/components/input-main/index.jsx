import * as S from "./style";
import React from "react";

export default function InputMain({
  placeholder,
  onBlur,
  onKeyDown,
  fieldName,
}) {
  return (
    <React.Fragment>
      <S.InputMain
        placeholder={placeholder}
        onKeyDown={onKeyDown}
        id={fieldName}
      ></S.InputMain>
      <S.InputMainMobile
        placeholder={placeholder}
        onKeyDown={onKeyDown}
        id={fieldName}
      ></S.InputMainMobile>
    </React.Fragment>
  );
}
