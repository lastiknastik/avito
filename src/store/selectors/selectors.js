const skyvitoSelector = (store) => {
  return store.skyvitoRedux;
};

export const mainGoodsSearchFilter = (store) => {
  return skyvitoSelector(store)?.mainGoodsSearchFilter || "";
};
