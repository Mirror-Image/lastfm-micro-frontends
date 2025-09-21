import { useGetTopArtistsQuery } from "@/store/services/topArtists";

export const TopArtists = () => {
  // const [page, setPage] = useState(1);

  const { data, isLoading } = useGetTopArtistsQuery({
    page: 1,
  });

  console.log(data);

  // const onPageChange = (page: number) => {
  //   setPage(page);
  // };
  //
  // const totalPages = Number(data?.artists["@attr"].totalPages);

  return <div>{isLoading ? "Loading" : "TOP ARTISTS PAGE"}</div>;
};
