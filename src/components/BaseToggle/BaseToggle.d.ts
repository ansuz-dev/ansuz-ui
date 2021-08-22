import {FunctionComponent, SyntheticEvent} from "react";

export interface BaseToggleProps {
  fullwidth?: boolean;
  labelFirst?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
  direction?: "horz" | "vert";
  label?: string;
  toggleOn: any;
  toggleOff: any;
  onMouseOver: (evt: SyntheticEvent) => void,
  onMouseLeave: (evt: SyntheticEvent) => void,
}

declare const BaseToggle: FunctionComponent<BaseToggleProps>;

export default BaseToggle;
