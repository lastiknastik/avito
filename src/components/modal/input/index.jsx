import * as S from "./style";

export default function InputModal({
  type,
  name,
  id,
  placeholder,
  children,
  className,
  required,
}) {
  return (
    <S.InputModal
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      className={className}
      required={required}
    >
      {children}
    </S.InputModal>
  );
}
