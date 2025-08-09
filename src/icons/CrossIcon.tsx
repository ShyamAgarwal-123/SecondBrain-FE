import { type ClickableIcon } from ".";

import { iconSizeVariants } from ".";

const CrossIcon = ({ size = "sm", className = "", onClick }: ClickableIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={`${iconSizeVariants[size]} ${className}`}
      onClick={onClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
};

export default CrossIcon;
