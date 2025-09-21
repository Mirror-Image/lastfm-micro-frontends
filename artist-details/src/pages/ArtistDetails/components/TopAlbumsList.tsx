import { Spinner } from "@heroui/spinner";
import { FC } from "react";

import { Title } from "./Title.tsx";
import { ListItem } from "./ListItem.tsx";

import { useGetTopAlbumsQuery } from "@/store/services/artist";

interface ITopAlbumsListProps {
  mbid?: string;
  artist?: string;
}

export const TopAlbumsList: FC<ITopAlbumsListProps> = ({ mbid, artist }) => {
  const { data, isLoading } = useGetTopAlbumsQuery(
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
      <Title size="base">Top Albums</Title>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {data?.topalbums?.album.map((entity) => (
          <ListItem key={entity.name} {...entity} />
        ))}
      </div>
    </div>
  );
};
