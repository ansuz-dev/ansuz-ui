import { FunctionComponent, ReactNode } from "react";

export type TooltipProps = {
  title: string;
  children: ReactNode
}

declare const Tooltip: FunctionComponent<TooltipProps>;

export default Tooltip;
