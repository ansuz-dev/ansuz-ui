import { FunctionComponent, SyntheticEvent } from "react";

export interface BaseToggleProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "filled" | "outlined";
  color?: "primary" | "secondary" | "white";
  fullwidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  isSubmit?: boolean;
  onClick: (evt: SyntheticEvent) => void,
}

declare const Button: FunctionComponent<BaseToggleProps>;

export default Button;
