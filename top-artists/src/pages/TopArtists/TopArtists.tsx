import { useState } from "react";
import { Pagination } from "@heroui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/table";
import { Spinner } from "@heroui/spinner";

import { RenderCell } from "./components/RenderCell.tsx";

import { useGetTopArtistsQuery } from "@/store/services/topArtists";
import { IArtist } from "@/store/services/topArtists/types.ts";

export const TopArtists = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading } = useGetTopArtistsQuery({
    page,
  });

  const onPageChange = (page: number) => {
    setPage(page);
  };

  const totalPages = Number(data?.artists["@attr"].totalPages);

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
        <TableColumn key="listeners" className="text-base">
          Followers
        </TableColumn>
        <TableColumn key="playcount" className="text-base">
          Play Count
        </TableColumn>
        <TableColumn key="mbid" className="text-base">
          Details
        </TableColumn>
      </TableHeader>
      <TableBody
        emptyContent="No data found"
        items={data?.artists?.artist ?? []}
        loadingContent={<Spinner />}
        loadingState={isLoading ? "loading" : "idle"}
      >
        {(item) => (
          <TableRow key={item?.name}>
            {(columnKey) => (
              <TableCell>
                <RenderCell
                  columnKey={columnKey as keyof IArtist}
                  data={item}
                />
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
