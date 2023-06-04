import * as S from "./style";

export default function InputModal({
  type,
  name,
  id,
  placeholder,
  children,
  className,
}) {
  return (
    <S.InputModal
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      className={className}
    >
      {children}
    </S.InputModal>
  );
}
