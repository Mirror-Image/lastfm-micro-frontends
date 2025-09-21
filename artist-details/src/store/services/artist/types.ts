export type TArtistRequest = {
  artist?: string;
};

export type TGetArtistResponse = {
  artist: {
    name: string;
    mbid: string;
    url: string;
    image: IImage[];
    streamable: string;
    ontour: string;
    stats: {
      listeners: string;
      playcount: string;
    };
    similar: {
      artist: Array<{
        name: string;
        url: string;
        image: IImage[];
      }>;
    };
    tags: {
      tag: Array<{
        name: string;
        url: string;
      }>;
    };
    bio: {
      links: {
        link: {
          "#text": string;
          rel: string;
          href: string;
        };
      };
      content: string;
      published: string;
      summary: string;
    };
  };
};

type ImageSize = "small" | "medium" | "large" | "extralarge" | "mega";

export interface IImage {
  "#text": string;
  size: ImageSize;
}

export type TGetTopAlbumsRequest = {
  mbid?: string;
  artist?: string;
};

export type TGetTopTracksRequest = TGetTopAlbumsRequest;

export type TGetTopAlbumsResponse = {
  topalbums: {
    "@attr": {
      artist: string;
      page: string;
      perPage: string;
      total: string;
      totalPages: string;
    };
    album: ITopAlbum[];
  };
};

export interface ITopAlbum {
  "@attr": {
    rank: string;
  };
  artist: {
    name: string;
    mbid: string;
    url: string;
  };
  image: IImage[];
  mbid: string;
  name: string;
  playcount: number;
  url: string;
}

export type TGetTopTracksResponse = {
  toptracks: {
    "@attr": {
      artist: string;
      page: string;
      perPage: string;
      total: string;
      totalPages: string;
    };
    track: ITopTrack[];
  };
};

export interface ITopTrack {
  "@attr": {
    rank: string;
  };
  artist: {
    name: string;
    mbid: string;
    url: string;
  };
  image: IImage[];
  listeners: string;
  mbid: string;
  name: string;
  playcount: string;
  streamable: string;
  url: string;
}
