import { FunctionComponent } from "react";

export interface LoadingProps {
  color?: "primary" | "secondary" | "white";
}

declare const Loading: FunctionComponent<LoadingProps>;

export default Loading;
