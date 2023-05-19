import React from "react";
import { BiHomeSmile } from "react-icons/bi";
import { TbUsers } from "react-icons/tb";
import { RiNewspaperLine } from "react-icons/ri";
import { RiSettingsLine } from "react-icons/ri";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import "./style.css";

const StoresNavbar = () => {
  const navList = [
    {
      icon: BiHomeSmile,
      text: "Dashboard",
      route: "/business-profile",
    },
    {
      icon: TbUsers,
      text: "New Add",
      route: "/new-add",
    },
    {
      icon: RiNewspaperLine,
      text: "Active Adds",
      route: "/active-adds",
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
