export type TGetTopTracksRequest = {
  page: number;
  limit?: number;
};

export type TGetTopTracksResponse = {
  tracks: {
    "@attr": {
      page: string;
      perPage: string;
      total: string;
      totalPages: string;
    };
    track: ITrack[];
  };
};

export interface ITrack {
  name: string;
  duration: string;
  playcount: string;
  listeners: string;
  mbid: string;
  url: string;
  streamable: {
    "#text": string;
    fulltrack: string;
  };
  artist: IArtist;
  image: Array<{
    "#text": string;
    size: string;
  }>;
}

export type IArtist = {
  name: string;
  mbid: string;
  url: string;
};
