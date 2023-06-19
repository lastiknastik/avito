import * as Types from "../types/types";

//set up main page goods filter
export const setMainGoodsSearchFilter = (mainGoodsSearchFilter) => ({
  type: Types.MAIN_GOODS_SEARCH_FILTER,
  payload: mainGoodsSearchFilter,
});
