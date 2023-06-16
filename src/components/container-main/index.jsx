import * as S from "./style";
import HeaderTitle from "../font-styles/header-title";
import Goods from "../goods";
import { useGetAdsQuery } from "../../services/skyvitoSrvcAPI";

export default function ContainerMain(props) {
  const {
    data: goods,
    isError,
    isLoading,
    isSuccess,
  } = useGetAdsQuery({}, { skip: false });

  return (
    <S.ContainerMain>
      <HeaderTitle>{"Объявления"}</HeaderTitle>
      <Goods goods={goods} />
    </S.ContainerMain>
  );
}
