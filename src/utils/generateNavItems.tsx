import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import { TAppRoute } from "../routes/types";

type NavItem = {
  label: React.ReactNode;
  key: string;
  children?: NavItem[];
  icon: ReactNode;
};

export const generateNavItems = (routes: TAppRoute[]): NavItem[] => {
  const navItems = routes.reduce((acc: NavItem[], route: TAppRoute) => {
    if (route.isNavItem && !route.children) {
      acc.push({
        label: route.name,
        key: route.path,
        icon: route.icon,
      });
    }

    if (route.children && route.isNavItem) {
      acc.push({
        key: route.path,
        label: <span>{route.name}</span>,
        icon: route.icon,
        children: route.children.map((child) => ({
          key: child.path,
          icon: route.icon,
          label: child.name,
        })),
      });
    }
    return acc;
  }, []);

  return navItems;
};
