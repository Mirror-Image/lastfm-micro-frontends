import { FC } from "react";

import { IImage } from "@/store/services/artist/types.ts";

interface IListItemProps {
  url: string;
  name: string;
  image: IImage[];
  playcount: number | string;
}

export const ListItem: FC<IListItemProps> = ({
  url,
  name,
  image,
  playcount,
}) => {
  return (
    <a
      key={name}
      className="flex gap-4 transition-all origin-left hover:scale-105"
      href={url}
      rel="noreferrer"
      target="_blank"
    >
      <img
        alt={name}
        className="rounded-md w-14 h-14"
        src={image.find((i) => i.size === "medium")!["#text"]}
      />
      <div>
        <p className="text-sm leading-none font-medium md:max-w-40">{name}</p>
        <p className="text-xs mt-1">
          {(+playcount).toLocaleString()} listeners
        </p>
      </div>
    </a>
  );
};
