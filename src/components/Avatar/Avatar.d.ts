import { FunctionComponent } from "react";

export interface AvatarProps {
  src: string;
  size?: "sm" | "md" | "lg";
  variant?: "circle" | "rounded" | "square";
  srcSet?: string;
  className?: string;
  alt?: string;
}

declare const Avatar: FunctionComponent<AvatarProps>;

export default Avatar;
