import * as Types from "../actions/types/types";

export const initialState = {
  mainGoodsSearchFilter: null,
};

export default function skyvito(state = initialState, action) {
  switch (action.type) {
    case Types.MAIN_GOODS_SEARCH_FILTER:
      return {
        ...state,
        mainGoodsSearchFilter: action.payload,
      };
    default:
      return state;
  }
}
