import { FC } from "react";

import { formatSecondsToMMSS } from "./helpers/formatSecondsToMMSS.ts";

interface IDurationCellProps {
  duration: string;
}

export const DurationCell: FC<IDurationCellProps> = ({ duration }) => (
  <p className="font-medium uppercase">{formatSecondsToMMSS(duration)}</p>
);
