import * as S from "./style";

export default function ProfileImg({ src }) {
  return (
    <S.ProfileImg>
      <img src={src} alt="" />
    </S.ProfileImg>
  );
}
