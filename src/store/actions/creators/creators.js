import * as Types from "../types/types";

//set up main page goods filter
export const setMainGoodsSearchFilter = (mainGoodsSearchFilter) => ({
  type: Types.MAIN_GOODS_SEARCH_FILTER,
  payload: mainGoodsSearchFilter,
});

//set access token
export const setAccessToken = (accessToken) => ({
  type: Types.ACCESS_TOKEN,
  payload: { accessToken, timestamp: Date.now() },
});

//set refresh token
export const setRefreshToken = (refreshToken) => ({
  type: Types.REFRESH_TOKEN,
  payload: { refreshToken, timestamp: Date.now() },
});
