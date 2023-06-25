import * as S from "./style";

export default function ProfileImg({ src }) {
  return (
    <S.ProfileImg>
      <a href="" target="_self">
        <img src={src} alt="" />
      </a>
    </S.ProfileImg>
  );
}
