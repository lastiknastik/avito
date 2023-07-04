import * as S from "./style";
import homeImg from "../../static/img/icon_01.png";
import createImg from "../../static/img/icon_02.png";
import profileImg from "../../static/img/icon_03.png";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  const onFooterBtnClickHandler = (e) => {
    const target = e.target;

    if (target.tagName === "IMG") {
      switch (target.alt) {
        case "home":
          navigate("/");
          break;
        case "create":
          navigate("/new-adv");
          break;
        case "profile":
          navigate("/profile");
          break;
        default:
      }
    }
  };

  return (
    <S.Footer>
      <S.FooterContainer onClick={onFooterBtnClickHandler}>
        <S.FooterImg>
          <img src={homeImg} alt="home" />
        </S.FooterImg>
        <S.FooterImg>
          <img src={createImg} alt="create" />
        </S.FooterImg>
        <S.FooterImg>
          <img src={profileImg} alt="profile" />
        </S.FooterImg>
      </S.FooterContainer>
    </S.Footer>
  );
}
