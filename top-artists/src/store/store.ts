import { configureStore } from "@reduxjs/toolkit";

import reducer from "./reducers";
import { topArtistsApi } from "./services/topArtists";

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([topArtistsApi.middleware]),
});

export type TAppDispatch = typeof store.dispatch;
export type TRootStore = ReturnType<typeof store.getState>;
