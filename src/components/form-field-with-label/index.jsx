import { FormFieldWrapper } from "./style";

export default function FormFieldWithLabel({ children, className }) {
  return <FormFieldWrapper className={className}>{children}</FormFieldWrapper>;
}
