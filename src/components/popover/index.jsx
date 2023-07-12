import { useRef, useEffect } from "react";
import * as S from "./styles";

export default function Popover({
  onClose,
  closeBtnRequired = true,
  children,
}) {
  const onCloseHandler = onClose;

  const containerRef = useRef();
  const popoverCloseBtnRef = useRef();

  useEffect(() => {
    if (closeBtnRequired) {
      const containerWidth = containerRef.current.offsetWidth;

      const popoverCloseBtnWidth = popoverCloseBtnRef.current.offsetWidth;

      popoverCloseBtnRef.current.style.transform = `translate(calc(${containerWidth}px / 2 - ${popoverCloseBtnWidth}px - 15px), 28px)`;
    }
  }, []);

  const onContainerClickHandler = (e) => {
    e.stopPropagation();
  };

  const onWrapperClickHandler = (e) => {
    onCloseHandler();
  };

  return (
    <S.Wrapper onClick={onWrapperClickHandler}>
      <S.Container ref={containerRef} onClick={onContainerClickHandler}>
        {closeBtnRequired && (
          <S.PopoverCloseBtn
            onClick={onCloseHandler}
            ref={popoverCloseBtnRef}
          />
        )}
        {children}
      </S.Container>
    </S.Wrapper>
  );
}
