const skyvitoSelector = (store) => {
  return store.skyvitoRedux;
};

export const mainGoodsSearchFilter = (store) => {
  return skyvitoSelector(store)?.mainGoodsSearchFilter || "";
};

export const accessToken = (store) => {
  return skyvitoSelector(store)?.access_token;
};

export const refreshToken = (store) => {
  return skyvitoSelector(store)?.refresh_token;
};
