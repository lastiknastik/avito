import FormFieldWithLabel from "../../../components/form-field-with-label";
import * as S from "./style";
import { useRef, useEffect } from "react";
import { SKYVITO_API_BASE_URL } from "../../../constants";

/* img and related input has imgUrl. this approach makes it possible to
understand if the image was removed or not. 
in img it stored in .styles.background, in input it stores in data-img-url attribute
//TODO: implement removal
*/
function PhotosBarItem({ name, itemNumber, defaultSrc = "", imgId = "" }) {
  const inputRef = useRef(null);
  const imgRef = useRef(null);
  const imgCoverRef = useRef(null);

  useEffect(() => {
    //set image from default src for adv editing
    const imgUrl = `${SKYVITO_API_BASE_URL}${defaultSrc}`;
    const bgStyle = defaultSrc
      ? `url("${imgUrl}") center center / 100px no-repeat`
      : "";
    imgRef.current.style.background = bgStyle;
    inputRef.current.dataset.imgUrl = imgUrl;

    if (bgStyle) imgCoverRef.current.style.display = "none";
  }, [defaultSrc]);

  const onPhotosBarItemClickHandler = (e) => {
    inputRef.current.click();
  };

  const onInputChangeHandler = (e) => {
    if (e.target.files && e.target.files[0]) {
      const imgUrl = URL.createObjectURL(e.target.files[0]);
      const bgStyle = `url("${imgUrl}") center center / 100px no-repeat`;

      imgRef.current.style.background = bgStyle;
      inputRef.current.dataset.imgUrl = imgUrl;
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
          data-img-id={imgId}
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
          const imgUrl = defaultImgs?.length > 0 ? defaultImgs[i]?.url : null;
          const imgId = defaultImgs?.length > 0 ? defaultImgs[i]?.id : null;

          return (
            <PhotosBarItem
              name={name}
              itemNumber={i}
              key={imgId || i}
              defaultSrc={imgUrl}
              imgId={imgId}
            />
          );
        })}
      </S.PhotosBar>
    </FormFieldWithLabel>
  );
}
