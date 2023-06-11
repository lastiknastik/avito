import * as S from "./style";
import FormFieldWithLabel from "../../form-field-with-label/index";

export default function TextAreaWithLabel({
  placeholder,
  name,
  id,
  label,
  rows = 1,
  cols = "auto",
}) {
  return (
    <FormFieldWithLabel>
      <label htmlFor={name}>{label}</label>
      <S.FormTextArea
        placeholder={placeholder}
        name={name}
        id={id}
        rows={rows}
        cols={cols}
      />
    </FormFieldWithLabel>
  );
}
