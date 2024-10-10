import React from "react";
import { FiLink, FiUser, FiEye } from "react-icons/fi";
import { Container } from "../../atoms";
import { generateNavItems } from "../../../utils";
import { appRoutes } from "../../../routes";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu } from "antd";

export const Navbar: React.FC = () => {
  // hooks
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const navItems = generateNavItems(appRoutes);
  return (
    <Container>
      <nav className="bg-white py-4 px-8 flex justify-between items-center mt-4 rounded-md">
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <div className="text-2xl font-bold text-purple-600">
            <span>LinkFy</span>
          </div>
        </div>

        <div className="flex">
          {navItems.map((item) => (
            <Link to={item.key} className="nav_item px-3 py-2 rounded-md">
              <div className="flex items-center space-x-2 hover:text-purple-600 ">
                {item.icon}
                <span className="hidden lg:inline">{item.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </nav>
    </Container>
  );
};
