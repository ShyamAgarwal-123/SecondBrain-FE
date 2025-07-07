import React, { memo, type ReactElement, type ReactNode } from "react";

export type VariantsTypes = "primary" | "secondary";
export type SizeTypes = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: VariantsTypes;
  size: SizeTypes;
  startIcon?: ReactElement<{ size: SizeTypes }>;
  endIcon?: ReactElement<{ size: SizeTypes }>;
  onClick?: () => void;
  children: ReactNode;
}

export const buttonVariants: Record<VariantsTypes, string> = {
  primary: "bg-[#5046e4]  text-[#f8fbff] gap-2",
  secondary: "bg-[#e0e7ff] text-[#564ec7]",
};

export const buttonSize: Record<SizeTypes, string> = {
  sm: "py-1 px-2 text-sm",
  md: "py-2 px-4 text-md",
  lg: "py-4 px-6 text-lg",
};

const defaultVarient = "font-light m-1 rounded flex items-center";
const Button = ({
  variant = "primary",
  size = "md",
  startIcon,
  endIcon,
  className,
  onClick,
  children,
}: ButtonProps) => {
  return (
    <button
      className={`${buttonVariants[variant]} ${buttonSize[size]} ${defaultVarient} ${className}`}
      onClick={onClick}
    >
      {startIcon ? (
        <span>{React.cloneElement(startIcon, { size })}</span>
      ) : null}
      <span>{children}</span>
      {endIcon ? <span>{React.cloneElement(endIcon, { size })}</span> : null}
    </button>
  );
};

export default Button;
