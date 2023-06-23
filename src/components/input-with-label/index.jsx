import * as S from "./style";

export default function InputWithLabel({
  className,
  children,
  label,
  name,
  placeholder,
  defaultValue,
}) {
  return (
    <S.Wrapper className={className}>
      <label>{label}</label>
      <input
        name={name}
        type="text"
        placeholder={placeholder}
        defaultValue={defaultValue}
      ></input>
    </S.Wrapper>
  );
}
