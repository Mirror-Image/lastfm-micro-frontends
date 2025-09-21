import { FC } from "react";

import { TopAlbumsList } from "./TopAlbumsList.tsx";
import { TopTracksList } from "./TopTracksList.tsx";

interface ITopListProps {
  mbid?: string;
  artist?: string;
}

export const TopList: FC<ITopListProps> = ({ mbid, artist }) => (
  <>
    <TopAlbumsList artist={artist} mbid={mbid} />
    <TopTracksList artist={artist} mbid={mbid} />
  </>
);
