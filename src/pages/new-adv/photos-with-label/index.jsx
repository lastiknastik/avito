import FormFieldWithLabel from "../../../components/form-field-with-label";
import * as S from "./style";
import { useRef } from "react";

function PhotosBarItem({ name, itemNumber }) {
  const inputRef = useRef(null);
  const imgRef = useRef(null);
  const imgCoverRef = useRef(null);

  const onPhotosBarItemClickHandler = (e) => {
    inputRef.current.click();
  };

  const onInputChangeHandler = (e) => {
    if (e.target.files && e.target.files[0]) {
      const bgStyle = `url("${URL.createObjectURL(
        e.target.files[0]
      )}") no-repeat center`;

      imgRef.current.style.background = bgStyle;
      imgCoverRef.current.style.display = "none";
    }
  };
  return (
    <S.PhotosBarItem
      key={itemNumber}
      onClick={onPhotosBarItemClickHandler}
      ref={imgRef}
    >
      <S.PhotosBarItemCover ref={imgCoverRef}>
        <input
          name={`${name}-${itemNumber}`}
          accept="image/*"
          type="file"
          ref={inputRef}
          onChange={onInputChangeHandler}
        />
      </S.PhotosBarItemCover>
    </S.PhotosBarItem>
  );
}

export default function PhotosWithLabel({ name, id }) {
  return (
    <FormFieldWithLabel>
      <label htmlFor="adv-photos">
        Фотографии товара <span>не более 5 фотографий</span>
      </label>
      <S.PhotosBar>
        {[...Array(5)].map((p, i) => (
          <PhotosBarItem name={name} itemNumber={i} key={i} />
        ))}
      </S.PhotosBar>
    </FormFieldWithLabel>
  );
}
