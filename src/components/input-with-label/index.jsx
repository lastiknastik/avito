import * as S from "./style";

export default function InputWithLabel({
  className,
  children,
  label,
  name,
  placeholder,
  defaultValue,
  initValue,
}) {
  return (
    <S.Wrapper className={className}>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.Input
        name={name}
        type="text"
        placeholder={placeholder}
        defaultValue={defaultValue}
        id={name}
        data-init-value={initValue || ""}
      ></S.Input>
    </S.Wrapper>
  );
}
