import * as S from "./style";
import avatarStub from "../../static/img/avatar.png";
import { SKYVITO_API_BASE_URL } from "../../constants";

export default function ProfileImg({ src }) {
  let avatarSrc = "";
  /* try to create url from src. 
  if it throws an error then the src not complete (no host etc) and not empty then 
  url will be created from base url + src */
  try {
    const avatarUrl = new URL(src);
    avatarSrc = avatarUrl.href; //same as just src but avoids warning
  } catch (error) {
    avatarSrc = src ? SKYVITO_API_BASE_URL + src : avatarStub;
  }

  return (
    <S.ProfileImg>
      <img src={avatarSrc} alt="" />
    </S.ProfileImg>
  );
}
