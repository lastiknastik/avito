import * as S from "./style";
import HeaderSubtitle from "../../components/font-styles/header-subtitle";
import FormFieldWithLabel from "../../components/form-field-with-label";
import ButtonMain from "../../components/button-main";
import TextAreaWithLabel from "../../components/controls/textarea-with-label";
import PriceWithLabel from "./price-with-label/index";
import PhotosWithLabel from "./photos-with-label";
import {
  usePostCreateAdvMutation,
  usePatchAdvByIdMutation,
} from "../../services/skyvitoSrvcAPI";

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
        data-init-value={defaultValue}
      />
    </FormFieldWithLabel>
  );
}

export default function NewAdv({ onClose, data }) {
  const isEditAdvMode = data ? true : false;

  const [createAdv] = usePostCreateAdvMutation();
  const [patchAdv] = usePatchAdvByIdMutation();

  const onNewAdvFormSubmitHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const formElements = e.nativeEvent.srcElement;
    const formData = { imgs: [], imgsToDelete: [] }; //init object fileds first

    console.log(e);

    //prepare data with form changes
    for (const el of formElements) {
      if (["INPUT", "TEXTAREA"].includes(el.tagName) && el.value) {
        if (
          !isEditAdvMode ||
          (isEditAdvMode && el.value !== el.dataset?.initValue)
        ) {
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
                //add new photo
                if (el.files && el.files.length > 0) {
                  formData.imgs.push({
                    name: el.files[0]?.name,
                    file: el.files[0],
                  });
                }

                /* remove photo
                data-img-id exists - img id was provided
                el.files exists - new image was uploaded (image was changed to the new one)
                data-img-url !exists - image was removed (image was removed)
                 */
                if (
                  el.dataset?.imgId &&
                  ((el.files && el.files.length > 0) || !el.dataset.imgUrl)
                ) {
                  formData.imgsToDelete.push(el.dataset.imgId);
                }
              }
          }
        }
      }
    }
    console.log("form data", formData);

    if (isEditAdvMode) {
      patchAdv({
        advId: data.id,
        title: formData.title,
        description: formData.description,
        price: formData.price,
      })
        .unwrap()
        .then((payload) => {
          console.debug(`adv with id=${data.id} updated`);

          if (onClose) {
            onClose();
          }
        })
        .catch((err) => console.error(err));
    } else {
      createAdv(formData)
        .unwrap()
        .then((payload) => {
          console.debug("new adv created", payload);

          if (onClose) {
            onClose();
          }
        })
        .catch((err) => console.error(err));
    }
    return;
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
          defaultValue={data?.title}
        />
        <TextAreaWithLabel
          placeholder="Введите описание"
          name="adv-description"
          id="adv-description"
          cols="auto"
          rows={10}
          label="Описание"
          defaultValue={data?.description}
        />
        <PhotosWithLabel
          name="adv-photos"
          id="adv-photos"
          defaultImgs={data?.images}
        />
        <PriceWithLabel
          name="adv-price"
          id="adv-price"
          label="Цена"
          type="number"
          defaultValue={data?.price}
        />
        <ButtonMain>{isEditAdvMode ? "Сохранить" : "Опубликовать"}</ButtonMain>
      </S.FormModal>
    </S.Wrapper>
  );
}
