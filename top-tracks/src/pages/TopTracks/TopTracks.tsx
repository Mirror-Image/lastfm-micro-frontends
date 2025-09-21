import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/table";
import { Pagination } from "@heroui/pagination";
import { Spinner } from "@heroui/spinner";

import { RenderCell } from "./components/RenderCell.tsx";

import { ITrack } from "@/store/services/topTracks/types.ts";
import { useGetTopTracksQuery } from "@/store/services/topTracks";

export const TopTracks = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading } = useGetTopTracksQuery({
    page,
  });

  const onPageChange = (page: number) => {
    setPage(page);
  };

  const totalPages = Number(data?.tracks["@attr"].totalPages);

  return (
    <Table
      aria-label="Example table with client async pagination"
      bottomContent={
        totalPages > 0 ? (
          <div className="flex w-full justify-center">
            <Pagination
              showControls
              showShadow
              classNames={{
                item: "w-fit px-2",
                cursor: "w-fit px-2",
              }}
              color="primary"
              isDisabled={isLoading}
              page={page}
              total={totalPages}
              variant="flat"
              onChange={onPageChange}
            />
          </div>
        ) : null
      }
    >
      <TableHeader>
        <TableColumn key="name" className="text-base">
          Name
        </TableColumn>
        <TableColumn key="artist" className="text-base">
          artist
        </TableColumn>
        <TableColumn key="duration" className="text-base">
          Duration
        </TableColumn>
        <TableColumn key="playcount" className="text-base">
          Playcount
        </TableColumn>
        <TableColumn key="url" className="text-base">
          Listen on last.fm
        </TableColumn>
      </TableHeader>
      <TableBody
        emptyContent="No data found"
        items={data?.tracks?.track ?? []}
        loadingContent={<Spinner />}
        loadingState={isLoading ? "loading" : "idle"}
      >
        {(item) => (
          <TableRow key={item?.name}>
            {(columnKey) => (
              <TableCell>
                <RenderCell columnKey={columnKey as keyof ITrack} data={item} />
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
