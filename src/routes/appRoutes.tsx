import { FiLink, FiUser } from "react-icons/fi";
import { Home, ProfileDetails } from "../pages/main";
import { TAppRoute } from "./types";

export const appRoutes: TAppRoute[] = [
  {
    id: 1,
    name: "Links",
    path: "/",
    isNavItem: true,
    component: <Home />,
    icon: <FiLink />,
  },
  {
    id: 1,
    name: "Profile Details",
    path: "/profile-details",
    isNavItem: true,
    component: <ProfileDetails />,
    icon: <FiUser />,
  },
];
