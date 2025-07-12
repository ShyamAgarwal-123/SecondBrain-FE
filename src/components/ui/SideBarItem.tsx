import type { ReactElement, ReactNode } from "react";

export interface SideBarItemProps extends React.HTMLAttributes<HTMLElement> {
  Icon: ReactElement;
  children: ReactNode;
}

const SideBarItem = ({ Icon, children }: SideBarItemProps) => {
  return (
    <div className="w-full p-2 flex gap-3 items-center">
      <div>{Icon}</div>
      <div>{children}</div>
    </div>
  );
};

export default SideBarItem;
