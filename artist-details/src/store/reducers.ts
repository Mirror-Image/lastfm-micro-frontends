import { combineReducers } from "@reduxjs/toolkit";

import { artistsApi } from "./services/artist";

export const reducers = combineReducers({
  [artistsApi.reducerPath]: artistsApi.reducer,
});

export default reducers;

export type TAppReducer = ReturnType<typeof reducers>;
