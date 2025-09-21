import { FC } from "react";
import { cn } from "@heroui/theme";

import { formatNumberWithSuffix } from "./helpers/formatNumberWithSuffix.ts";
import { highlightMoreThenBillionPlaycount } from "./helpers/highlightMoreThenBillionPlaycount.ts";

interface IPlaycountCellProps {
  playcount: string;
}

export const PlaycountCell: FC<IPlaycountCellProps> = ({ playcount }) => (
  <p
    className={cn(
      "font-medium",
      highlightMoreThenBillionPlaycount(playcount),
      "uppercase",
    )}
  >
    {formatNumberWithSuffix(playcount)}
  </p>
);
