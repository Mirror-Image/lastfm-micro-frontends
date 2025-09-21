import { FC } from "react";

import ListenCell from "./ListenCell.tsx";
import { TrackNameCell } from "./TrackNameCell.tsx";
import { DurationCell } from "./DurationCell.tsx";
import { PlaycountCell } from "./PlaycountCell.tsx";
import { ArtistCell } from "./ArtistCell.tsx";

import { ITrack } from "@/store/services/topTracks/types.ts";

interface IRenderCellProps {
  data: ITrack;
  columnKey: keyof ITrack;
}

export const RenderCell: FC<IRenderCellProps> = ({ data, columnKey }) => {
  switch (columnKey) {
    case "name":
      return <TrackNameCell name={data.name} src={data.image[0]["#text"]} />;
    case "artist":
      return <ArtistCell artist={data.artist} />;
    case "duration":
      return <DurationCell duration={data.duration} />;
    case "playcount":
      return <PlaycountCell playcount={data.playcount} />;
    case "url":
      return <ListenCell url={data.url} />;
    default:
      return null;
  }
};
