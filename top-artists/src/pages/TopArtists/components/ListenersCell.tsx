import { FC } from "react";

import { formatNumberWithSuffix } from "./helpers/formatNumberWithSuffix.ts";

interface IListenersCellProps {
  listeners: string;
}

export const ListenersCell: FC<IListenersCellProps> = ({ listeners }) => (
  <p className="font-medium uppercase">{formatNumberWithSuffix(listeners)}</p>
);
