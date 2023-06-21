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
    case Types.ACCESS_TOKEN:
      return {
        ...state,
        access_token: action.payload,
      };
    case Types.REFRESH_TOKEN:
      return {
        ...state,
        refresh_token: action.payload,
      };
    default:
      return state;
  }
}
