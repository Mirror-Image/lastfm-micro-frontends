import { configureStore } from "@reduxjs/toolkit";

import reducer from "./reducers";
import { topTracksApi } from "./services/topTracks";

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([topTracksApi.middleware]),
});

export type TAppDispatch = typeof store.dispatch;
export type TRootStore = ReturnType<typeof store.getState>;
