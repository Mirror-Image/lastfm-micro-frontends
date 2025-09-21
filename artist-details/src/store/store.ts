import { configureStore } from "@reduxjs/toolkit";

import reducer from "./reducers";
import { artistsApi } from "./services/artist";

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([artistsApi.middleware]),
});

export type TAppDispatch = typeof store.dispatch;
export type TRootStore = ReturnType<typeof store.getState>;
