import FormFieldWithLabel from "../../../components/form-field-with-label";
import * as S from "./style";
import { useRef, useEffect } from "react";
import { SKYVITO_API_BASE_URL } from "../../../constants";

function PhotosBarItem({ name, itemNumber, defaultSrc = "" }) {
  const inputRef = useRef(null);
  const imgRef = useRef(null);
  const imgCoverRef = useRef(null);

  useEffect(() => {
    //set image from default src for adv editing
    const bgStyle = defaultSrc
      ? `url("${SKYVITO_API_BASE_URL}${defaultSrc}") center center / 100px no-repeat`
      : "";
    imgRef.current.style.background = bgStyle;

    if (bgStyle) imgCoverRef.current.style.display = "none";
  }, [defaultSrc]);

  const onPhotosBarItemClickHandler = (e) => {
    inputRef.current.click();
  };

  const onInputChangeHandler = (e) => {
    if (e.target.files && e.target.files[0]) {
      const bgStyle = `url("${URL.createObjectURL(
        e.target.files[0]
      )}") center center / 100px no-repeat`;

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

export default function PhotosWithLabel({ name, defaultImgs }) {
  console.log("default images:", defaultImgs);
  return (
    <FormFieldWithLabel>
      <label htmlFor={name}>
        Фотографии товара <span>не более 5 фотографий</span>
      </label>
      <S.PhotosBar>
        {[...Array(5)].map((p, i) => {
          const imgUrl = defaultImgs[i]?.url;
          const imgId = defaultImgs[i]?.id;

          return (
            <PhotosBarItem
              name={name}
              itemNumber={i}
              key={imgId || i}
              defaultSrc={imgUrl}
            />
          );
        })}
      </S.PhotosBar>
    </FormFieldWithLabel>
  );
}
