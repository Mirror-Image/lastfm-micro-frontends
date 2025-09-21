export type TGetTopArtistsRequest = {
  page: number;
  limit?: number;
};

export type TGetTopArtistsResponse = {
  artists: {
    "@attr": {
      page: string;
      perPage: string;
      total: string;
      totalPages: string;
    };
    artist: IArtist[];
  };
};

export interface IArtist {
  name: string;
  playcount: string;
  listeners: string;
  mbid?: string;
  url: string;
  streamable: string;
  image: Array<{
    "#text": string;
    size: string;
  }>;
}
