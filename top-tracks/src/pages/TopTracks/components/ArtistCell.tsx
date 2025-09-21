import { FC } from "react";
import { Link } from "@heroui/link";
import { generatePath } from "react-router-dom";

import { IArtist } from "@/store/services/topTracks/types.ts";
import { appRoutes } from "@/constants/routes.ts";

interface IArtistCellProps {
  artist: IArtist;
}

export const ArtistCell: FC<IArtistCellProps> = ({ artist }) => (
  <Link
    href={generatePath(appRoutes.topArtists.details, { name: artist.name })}
  >
    {artist.name}
  </Link>
);
