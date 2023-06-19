import * as S from "./style";
import HeaderTitle from "../font-styles/header-title";
import Goods from "../goods";
import { useGetAdsQuery } from "../../services/skyvitoSrvcAPI";
import { mainGoodsSearchFilter } from "../../store/selectors/selectors";
import { useSelector } from "react-redux";

export default function ContainerMain(props) {
  const {
    data: goods,
    isError,
    isLoading,
    isSuccess,
  } = useGetAdsQuery({}, { skip: false });

  const goodsFilterValue = useSelector(mainGoodsSearchFilter);

  return (
    <S.ContainerMain>
      <HeaderTitle>{"Объявления"}</HeaderTitle>
      {
        /* check goods loaing state*/
        isLoading ? (
          <p>Goods are loading</p>
        ) : isError ? (
          <p>Goods loading failed</p>
        ) : isSuccess ? (
          <Goods
            goods={goods.filter((g) => {
              return (
                !goodsFilterValue ||
                g.title.toLowerCase().includes(goodsFilterValue.toLowerCase())
              );
            })}
          />
        ) : (
          <p>Something went wrong</p>
        )
      }
    </S.ContainerMain>
  );
}
