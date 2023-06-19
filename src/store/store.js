import { configureStore } from "@reduxjs/toolkit";
import { skyvitoApi } from "../services/skyvitoSrvcAPI";
import skyvito from "./reducers/skyvito";

export const store = configureStore({
  reducer: {
    skyvitoRedux: skyvito,
    [skyvitoApi.reducerPath]: skyvitoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(skyvitoApi.middleware),
});
