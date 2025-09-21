import { FC } from "react";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";

interface IListenCellProps {
  url: string;
}

const ListenCell: FC<IListenCellProps> = ({ url }) => {
  return (
    <Button as={Link} color="primary" href={url} size="sm" variant="shadow">
      Listen
    </Button>
  );
};

export default ListenCell;
