import * as S from "./style";
import HeaderSubtitle from "../../components/header-subtitle";
import FormFieldWithLabel from "../../components/form-field-with-label";
import ButtonMain from "../../components/button-main";

function InputFieldWithLabel({ placeholder, name, id, type = "text", label }) {
  return (
    <FormFieldWithLabel>
      <label htmlFor={name}>{label}</label>
      <S.FormInput placeholder={placeholder} name={name} id={id} type={type} />
    </FormFieldWithLabel>
  );
}

function TextAreaFieldWithLabel({
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

function PhotosWithLabel() {
  return (
    <FormFieldWithLabel>
      <label htmlFor="adv-photos">
        Фотографии товара <span>не более 5 фотографий</span>
      </label>
      <S.PhotosBar>
        {[...Array(5)].map((p, i) => (
          <S.PhotosBarItem key={i}>
            <img src="" alt="" />
            <S.PhotosBarItemCover />
          </S.PhotosBarItem>
        ))}
      </S.PhotosBar>
    </FormFieldWithLabel>
  );
}

function PriceWithLabel({ name, label, id, type = "text" }) {
  return (
    <S.FormFieldPricedWithLabel>
      <label htmlFor={name}>{label}</label>
      <S.PriceInput name={name} id={id} type={type} />
      <S.PriceInputCover />
    </S.FormFieldPricedWithLabel>
  );
}

export default function NewAdv({ children }) {
  return (
    <S.Wrapper>
      <HeaderSubtitle>{"Новое объявление"}</HeaderSubtitle>
      <S.FormModal>
        <InputFieldWithLabel
          name="adv-name"
          placeholder="Введите название"
          id="adv-name"
          label="Название"
        />
        <TextAreaFieldWithLabel
          placeholder="Введите описание"
          name="adv-description"
          id="adv-description"
          cols="auto"
          rows={10}
          label="Описание"
        />
        <PhotosWithLabel />
        <PriceWithLabel name="adv-price" id="adv-price" label="Цена" />
        <ButtonMain>Опубликовать</ButtonMain>
      </S.FormModal>
    </S.Wrapper>
  );
}
