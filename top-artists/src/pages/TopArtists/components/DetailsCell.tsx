import { generatePath } from "react-router-dom";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { FC } from "react";

import { appRoutes } from "@/constants/routes.ts";

interface IDetailsCellProps {
  name: string;
}

export const DetailsCell: FC<IDetailsCellProps> = ({ name }) => {
  const link = generatePath(appRoutes.topArtists.details, {
    name,
  });

  return (
    <Button as={Link} color="primary" href={link} size="sm" variant="shadow">
      Details
    </Button>
  );
};
