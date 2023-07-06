import * as S from "./style";
import logoModal from "../../../static/img/logo_modal.png";

export default function LogoModal() {
  return (
    <S.LogoModal>
      <img src={logoModal} alt="logo" />
    </S.LogoModal>
  );
}
