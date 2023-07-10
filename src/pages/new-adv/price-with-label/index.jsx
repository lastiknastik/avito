import * as S from "./style";

export default function PriceWithLabel({
  name,
  label,
  id,
  type = "text",
  isRequired = false,
  defaultValue = "",
}) {
  return (
    <S.FormFieldPricedWithLabel>
      <label htmlFor={name}>{label}</label>
      <S.PriceInput
        name={name}
        id={id}
        type={type}
        required={isRequired}
        defaultValue={defaultValue}
        data-init-value={defaultValue}
      />
      <S.PriceInputCover />
    </S.FormFieldPricedWithLabel>
  );
}
