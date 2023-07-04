import * as S from "./style";

export default function PriceWithLabel({
  name,
  label,
  id,
  type = "text",
  isRequired = false,
}) {
  return (
    <S.FormFieldPricedWithLabel>
      <label htmlFor={name}>{label}</label>
      <S.PriceInput name={name} id={id} type={type} required={isRequired} />
      <S.PriceInputCover />
    </S.FormFieldPricedWithLabel>
  );
}
