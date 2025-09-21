import { combineReducers } from "@reduxjs/toolkit";

import { topArtistsApi } from "./services/topArtists";

export const reducers = combineReducers({
  [topArtistsApi.reducerPath]: topArtistsApi.reducer,
});

export default reducers;

export type TAppReducer = ReturnType<typeof reducers>;
