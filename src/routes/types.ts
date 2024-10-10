import { ReactNode } from "react";

export type TAppRoute = {
  id: number;
  name: string;
  path: string;
  component?: React.ReactNode;
  isNavItem: boolean;
  isSidebar?: boolean;
  children?: TAppRoute[];
  icon?: ReactNode;
};
