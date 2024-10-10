import React from "react";
import { Navbar } from "../Navbar";
import { getDarkMode } from "../../../redux/features/theme";
import { useAppSelector } from "../../../redux";
import { useLocation } from "react-router-dom";
import { Footer } from "../Footer";

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const isDarkMode = useAppSelector(getDarkMode);
  const location = useLocation();

  return (
    <section
      className={`${isDarkMode ? "dark bg-black" : "bg-[#FAFAFA]"} h-[100vh]`}
    >
      <Navbar />
      <React.Fragment>
        <div>{children}</div>
      </React.Fragment>
      <Footer />
    </section>
  );
};
