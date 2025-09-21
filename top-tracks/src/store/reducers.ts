import { combineReducers } from "@reduxjs/toolkit";

import { topTracksApi } from "./services/topTracks";

export const reducers = combineReducers({
  [topTracksApi.reducerPath]: topTracksApi.reducer,
});

export default reducers;

export type TAppReducer = ReturnType<typeof reducers>;
