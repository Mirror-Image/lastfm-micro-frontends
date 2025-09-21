import { Link } from "@heroui/link";
import { User } from "@heroui/user";
import { FC } from "react";

import { IArtist } from "@/store/services/topArtists/types.ts";

interface IUserCellProps {
  data: IArtist;
}

export const UserCell: FC<IUserCellProps> = ({ data }) => (
  <User
    avatarProps={{ radius: "md", src: data.image[0]["#text"] }}
    classNames={{
      name: "font-medium",
    }}
    description={
      <Link isExternal color="warning" href={data.url} size="sm">
        Link to last.fm
      </Link>
    }
    name={data.name}
  />
);
