import { FC } from "react";
import { User } from "@heroui/user";

interface ITrackNameCellProps {
  name: string;
  src: string;
}

export const TrackNameCell: FC<ITrackNameCellProps> = ({ name, src }) => (
  <User
    avatarProps={{ radius: "md", src, alt: "Albom Cover" }}
    classNames={{
      name: "font-medium",
    }}
    name={name}
  />
);
