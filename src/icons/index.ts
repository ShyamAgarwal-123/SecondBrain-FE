export type IconsTypes = "sm" | "md" | "lg" | "xl";
export interface ClickableIcon extends IconsProps {
  className?: string;
  onClick?: () => void;
}
export interface IconsProps {
  size?: IconsTypes;
}

export const iconSizeVariants: Record<IconsTypes, string> = {
  sm: "size-2",
  md: "size-4",
  lg: "size-6",
  xl: "size-8",
};
