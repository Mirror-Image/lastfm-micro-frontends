import { FC } from "react";

import { UserCell } from "./UserCell.tsx";
import { PlaycountCell } from "./PlaycountCell.tsx";
import { DetailsCell } from "./DetailsCell.tsx";
import { ListenersCell } from "./ListenersCell.tsx";

import { IArtist } from "@/store/services/topArtists/types.ts";

interface IRenderCellProps {
  data: IArtist;
  columnKey: keyof IArtist;
}

export const RenderCell: FC<IRenderCellProps> = ({ data, columnKey }) => {
  switch (columnKey) {
    case "name":
      return <UserCell data={data} />;
    case "playcount":
      return <PlaycountCell playcount={data.playcount} />;
    case "listeners":
      return <ListenersCell listeners={data.listeners} />;
    case "mbid":
      return <DetailsCell name={data.name} />;
    default:
      return null;
  }
};
