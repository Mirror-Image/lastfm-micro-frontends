import { createApi } from "@reduxjs/toolkit/query/react";

import { axiosBaseQuery } from "../axiosBaseQuery";

import { ARTIST_TAG, LIST_ID } from "./constants.ts";
import { TGetArtistResponse, TArtistRequest } from "./types.ts";

import { ENV_LASTFM_API_KEY } from "@/constants/envs.ts";

export const artistsApi = createApi({
  reducerPath: "artistsApi",
  tagTypes: [ARTIST_TAG],
  baseQuery: axiosBaseQuery({ baseUrl: "https://ws.audioscrobbler.com/2.0/" }),
  endpoints: (builder) => ({
    getArtist: builder.query<TGetArtistResponse, TArtistRequest>({
      query: ({ artist }) => ({
        url: `?method=artist.getinfo&&api_key=${ENV_LASTFM_API_KEY}&format=json`,
        params: {
          artist,
        },
      }),
      providesTags: (result) =>
        result
          ? [
              ...(result?.artists?.artist.map(({ mbid }) => ({
                type: ARTIST_TAG,
                id: mbid,
              })) ?? []),
              { type: ARTIST_TAG, id: LIST_ID },
            ]
          : [{ type: ARTIST_TAG, id: LIST_ID }],
    }),
  }),
});

export const { useGetArtistQuery } = artistsApi;
