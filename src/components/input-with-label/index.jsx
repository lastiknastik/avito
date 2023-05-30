import * as S from "./style";

export default function InputWithLabel({
  className,
  children,
  label,
  name,
  placeholder,
}) {
  return (
    <S.Wrapper className={className}>
      <label>{label}</label>
      <input name={name} type="text" placeholder={placeholder}></input>
    </S.Wrapper>
  );
}
