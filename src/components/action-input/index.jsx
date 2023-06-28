import * as S from "./style";
import { useRef } from "react";

export default function ActionInput({
  type,
  value,
  accept,
  name,
  label,
  onChange,
  form,
}) {
  const inputRef = useRef(null);

  const onLabelClickHandler = (e) => {
    inputRef.current.click();
  };

  return (
    <S.ActionInput>
      <label htmlFor={name} onClick={onLabelClickHandler}>
        {label}
      </label>
      <input
        type={type}
        defaultValue={value}
        accept={accept}
        name={name}
        ref={inputRef}
        onChange={onChange}
        form={form}
        id={name}
      />
    </S.ActionInput>
  );
}
