import * as S from "./style";
import HeaderSubtitle from "../../components/font-styles/header-subtitle";
import FormFieldWithLabel from "../../components/form-field-with-label";
import ButtonMain from "../../components/button-main";
import TextAreaWithLabel from "../../components/controls/textarea-with-label";
import PriceWithLabel from "./price-with-label/index";
import PhotosWithLabel from "./photos-with-label";
import { usePostCreateAdvMutation } from "../../services/skyvitoSrvcAPI";

function InputFieldWithLabel({
  placeholder,
  name,
  id,
  type = "text",
  label,
  isRequired = false,
  defaultValue = "",
}) {
  return (
    <FormFieldWithLabel>
      <label htmlFor={name}>{label}</label>
      <S.FormInput
        placeholder={placeholder}
        name={name}
        id={id}
        type={type}
        required={isRequired}
        defaultValue={defaultValue}
      />
    </FormFieldWithLabel>
  );
}

export default function NewAdv({ onClose, data }) {
  const isEditAdvMode = data ? true : false;

  const [createAdv] = usePostCreateAdvMutation();

  const onNewAdvFormSubmitHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const formElements = e.nativeEvent.srcElement;
    const formData = { imgs: [] };

    for (const el of formElements) {
      if (["INPUT", "TEXTAREA"].includes(el.tagName) && el.value) {
        switch (el.name) {
          case "adv-name":
            formData.title = el.value;
            break;
          case "adv-description":
            formData.description = el.value;
            break;
          case "adv-price":
            formData.price = el.value;
            break;
          default:
            if (el.name.includes("adv-photos-")) {
              formData.imgs.push({
                name: el.files[0]?.name,
                file: el.files[0],
              });
            }
        }
      }
    }

    createAdv(formData)
      .unwrap()
      .then((payload) => {
        console.debug("new adv created", payload);

        if (onClose) {
          onClose();
        }
      })
      .then((err) => console.error(err));
  };

  return (
    <S.Wrapper>
      <HeaderSubtitle>
        {isEditAdvMode ? "Редактировать объявление" : "Новое объявление"}
      </HeaderSubtitle>
      <S.FormModal onSubmit={onNewAdvFormSubmitHandler}>
        <InputFieldWithLabel
          name="adv-name"
          placeholder="Введите название"
          id="adv-name"
          label="Название"
          isRequired={true}
          defaultValue={data.title}
        />
        <TextAreaWithLabel
          placeholder="Введите описание"
          name="adv-description"
          id="adv-description"
          cols="auto"
          rows={10}
          label="Описание"
          defaultValue={data.description}
        />
        <PhotosWithLabel
          name="adv-photos"
          id="adv-photos"
          defaultImgs={data.images}
        />
        <PriceWithLabel
          name="adv-price"
          id="adv-price"
          label="Цена"
          type="number"
          defaultValue={data.price}
        />
        <ButtonMain>{isEditAdvMode ? "Сохранить" : "Опубликовать"}</ButtonMain>
      </S.FormModal>
    </S.Wrapper>
  );
}
