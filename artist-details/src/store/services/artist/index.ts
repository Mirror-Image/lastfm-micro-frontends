import { createApi } from "@reduxjs/toolkit/query/react";

import { axiosBaseQuery } from "../axiosBaseQuery";

import { ARTIST_TAG } from "./constants.ts";
import {
  TGetArtistResponse,
  TArtistRequest,
  TGetTopAlbumsRequest,
  TGetTopTracksRequest,
  TGetTopAlbumsResponse,
  TGetTopTracksResponse,
} from "./types.ts";

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
    }),
    getTopAlbums: builder.query<TGetTopAlbumsResponse, TGetTopAlbumsRequest>({
      query: ({ mbid, artist }) => ({
        url: `?method=artist.gettopalbums&format=json`,
        params: {
          ...(mbid ? { mbid } : { artist }),
          api_key: ENV_LASTFM_API_KEY,
          limit: 10,
        },
      }),
    }),
    getTopTracks: builder.query<TGetTopTracksResponse, TGetTopTracksRequest>({
      query: ({ mbid, artist }) => ({
        url: `?method=artist.gettoptracks&format=json`,
        params: {
          ...(mbid ? { mbid } : { artist }),
          api_key: ENV_LASTFM_API_KEY,
          limit: 10,
        },
      }),
    }),
  }),
});

export const { useGetArtistQuery, useGetTopAlbumsQuery, useGetTopTracksQuery } =
  artistsApi;
