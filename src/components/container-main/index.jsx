import * as S from "./style";
import HeaderTitle from "../font-styles/header-title";
import Goods from "../goods";

export default function ContainerMain(props) {
  return (
    <S.ContainerMain>
      <HeaderTitle>{"Объявления"}</HeaderTitle>
      <Goods />
    </S.ContainerMain>
  );
}
