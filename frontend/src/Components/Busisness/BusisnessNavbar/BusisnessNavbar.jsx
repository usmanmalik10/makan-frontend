import React from "react";
import { BiHomeSmile } from "react-icons/bi";
import { TbUsers } from "react-icons/tb";
import { RiNewspaperLine } from "react-icons/ri";
import { RiSettingsLine } from "react-icons/ri";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import "./style.css";

const BusisnessNavbar = () => {
  const navList = [
    {
      icon: BiHomeSmile,
      text: "Dashboard",
      route: "/",
    },
    {
      icon: TbUsers,
      text: "New Add",
      route: "/newadd",
    },
    {
      icon: RiNewspaperLine,
      text: "Active Adds",
      route: "/activeadds",
    },
    // {
    //   icon: RiSettingsLine,
    //   text: "Plots For Sale",
    //   route: "/plotssale",
    // },
  ];
  return (
    <div>
      <div className="mobile-navbar">
        <MobileNavbar navList={navList} />
      </div>
      <div className="desktop-navbar">
        <DesktopNavbar navList={navList} />
      </div>
    </div>
  );
};

export default BusisnessNavbar;
