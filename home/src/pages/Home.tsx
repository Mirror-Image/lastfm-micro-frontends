import { Key } from "react";
import { useAsyncList } from "@react-stately/data";
import { Autocomplete, AutocompleteItem } from "@heroui/autocomplete";
import { useState } from "react";
import { Button } from "@heroui/button";
import { generatePath } from "react-router-dom";
import { Link } from "@heroui/link";

import { ENV_LASTFM_API_KEY } from "@/constants/envs.ts";
import { appRoutes } from "@/constants/routes.ts";

type TArtist = {
  images: Array<{
    "#text": string;
    size: string;
  }>;
  listeners: string;
  mbid: string;
  name: string;
  streamable: string;
  url: string;
};

export const Home = () => {
  const [selectedKey, setSelectedKey] = useState<Key | null>(null);

  const list = useAsyncList<TArtist>({
    async load({ signal, filterText }) {
      const res = await fetch(
        `https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${filterText}&limit=10&api_key=${ENV_LASTFM_API_KEY}&format=json`,
        { signal },
      );

      const data = await res.json();

      return {
        items: data.results.artistmatches.artist,
      };
    },
  });

  const onSelectionChange = (key: Key | null) => {
    setSelectedKey(key);
  };

  return (
    <div className="h-[calc(100vh-176px)] flex flex-col justify-center items-center gap-8 px-4 text-center">
      <div className="flex flex-col justify-center items-center mb-50">
        <h2 className="w-[75%] mb-8 text-[2.25rem] font-bold text-fuchsia-400 uppercase bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 leading-tight">
          Discover your favorite artist and start listening now
        </h2>
        <div className="flex gap-4 max-w-xl w-full">
          <Autocomplete
            fullWidth
            isClearable
            inputValue={list.filterText}
            isLoading={list.isLoading}
            items={list.items}
            placeholder="Type to search..."
            size="lg"
            variant="flat"
            onInputChange={list.setFilterText}
            onSelectionChange={onSelectionChange}
          >
            {(item) => (
              <AutocompleteItem key={item.name} className="capitalize">
                {item.name}
              </AutocompleteItem>
            )}
          </Autocomplete>
          <Button
            as={Link}
            color="primary"
            size="lg"
            {...(selectedKey && {
              href: generatePath(appRoutes.topArtists.details, {
                name: encodeURIComponent(String(selectedKey)),
              }),
            })}
            isDisabled={!selectedKey}
            variant="shadow"
          >
            Go
          </Button>
        </div>
      </div>
    </div>
  );
};
