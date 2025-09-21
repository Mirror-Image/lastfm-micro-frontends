import { Spinner } from "@heroui/spinner";
import { FC } from "react";

import { ListItem } from "./ListItem.tsx";
import { Title } from "./Title.tsx";

import { useGetTopTracksQuery } from "@/store/services/artist";

interface ITopTracksListProps {
  mbid?: string;
  artist?: string;
}

export const TopTracksList: FC<ITopTracksListProps> = ({ mbid, artist }) => {
  const { data, isLoading } = useGetTopTracksQuery(
    { mbid, artist },
    { skip: !mbid },
  );

  if (isLoading)
    return (
      <div className="h-[420px] flex items-center justify-center">
        <Spinner color="danger" />
      </div>
    );

  return (
    <div className="flex-1 basis-auto">
      <Title size="base">Top Tracks</Title>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {data?.toptracks?.track.map((entity) => (
          <ListItem key={entity.name} {...entity} />
        ))}
      </div>
    </div>
  );
};
