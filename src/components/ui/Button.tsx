import React, { type ReactElement, type ReactNode } from "react";

export type VariantsTypes = "primary" | "secondary";
export type SizeTypes = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: VariantsTypes;
  size: SizeTypes;
  startIcon?: ReactElement<{ size: SizeTypes }>;
  endIcon?: ReactElement<{ size: SizeTypes }>;
  children: ReactNode;
  loading?: boolean;
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
  loading = false,
}: ButtonProps) => {
  return (
    <button
      className={`${buttonVariants[variant]} ${buttonSize[size]} ${defaultVarient} ${className} `}
      onClick={onClick}
      disabled={loading}
    >
      {loading ? (
        <span className="animate-spin border-2 border-t-transparent border-white rounded-full w-5 h-5"></span>
      ) : (
        <>
          {startIcon ? (
            <span>{React.cloneElement(startIcon, { size })}</span>
          ) : null}
          <span>{children}</span>
          {endIcon ? (
            <span>{React.cloneElement(endIcon, { size })}</span>
          ) : null}
        </>
      )}
    </button>
  );
};

export default Button;
