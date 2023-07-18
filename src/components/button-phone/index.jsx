import ButtonMain from "../button-main";
import { useState } from "react";

export default function ButtonPhone({ phoneNumber }) {
  const [isPhoneHidden, setIsPhoneHidden] = useState(true);

  const onShowPhoneBtnClickHandler = (e) => {
    setIsPhoneHidden(!isPhoneHidden);
  };

  return (
    <ButtonMain onClick={onShowPhoneBtnClickHandler}>
      {isPhoneHidden ? "Показать телефон" : "Скрыть телефон"}
      <span>
        {isPhoneHidden
          ? phoneNumber.substring(0, phoneNumber.length - 9) +
            phoneNumber
              .replace(/[0-9]/g, "X")
              .substring(phoneNumber.length - 9, phoneNumber.length)
          : phoneNumber}
      </span>
    </ButtonMain>
  );
}
