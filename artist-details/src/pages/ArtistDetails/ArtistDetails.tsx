import { useParams } from "react-router-dom";

import { useGetArtistQuery } from "@/store/services/artist";

export const ArtistDetails = () => {
  const { name } = useParams<{ name: string }>();
  const { data, isLoading } = useGetArtistQuery(
    { artist: name },
    { skip: !name },
  );

  console.log(name, data);

  return (
    <div className="text-white">
      {isLoading ? "Loading..." : "ArtistDetails"}
    </div>
  );
};
