import { createApi } from "@reduxjs/toolkit/query/react";

import { axiosBaseQuery } from "../axiosBaseQuery";

import { LIST_ID, TOP_ARTISTS_TAG } from "./constants.ts";
import { TGetTopArtistsResponse, TGetTopArtistsRequest } from "./types.ts";

import { ENV_LASTFM_API_KEY } from "@/constants/envs.ts";

export const topArtistsApi = createApi({
  reducerPath: "topArtistsApi",
  tagTypes: [TOP_ARTISTS_TAG],
  baseQuery: axiosBaseQuery({ baseUrl: "https://ws.audioscrobbler.com/2.0/" }),
  endpoints: (builder) => ({
    getTopArtists: builder.query<TGetTopArtistsResponse, TGetTopArtistsRequest>(
      {
        query: ({ page, limit = 20 }) => ({
          url: `?method=chart.gettopartists&api_key=${ENV_LASTFM_API_KEY}&format=json`,
          params: {
            page,
            limit,
          },
        }),
        providesTags: (result) =>
          result
            ? [
                ...(result?.artists?.artist.map(({ mbid }) => ({
                  type: TOP_ARTISTS_TAG,
                  id: mbid,
                })) ?? []),
                { type: TOP_ARTISTS_TAG, id: LIST_ID },
              ]
            : [{ type: TOP_ARTISTS_TAG, id: LIST_ID }],
      },
    ),
  }),
});

export const { useGetTopArtistsQuery } = topArtistsApi;
