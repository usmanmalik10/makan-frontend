import React from "react";
import { BiHomeSmile } from "react-icons/bi";
import { TbUsers } from "react-icons/tb";
import { RiNewspaperLine } from "react-icons/ri";
import { RiSettingsLine } from "react-icons/ri";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import "./style.css";
import { AiFillFolderAdd, AiOutlineCheck } from "react-icons/ai";

const StrategicNavbar = () => {
  const navList = [
    {
      icon: BiHomeSmile,
      text: "Dashboard",
      route: "/strategic-sale-partner-profile",
    },
    {
      icon: AiFillFolderAdd,
      text: "Stores Data",
      route: "/strategic-stores-data",
    },
    {
      icon: AiOutlineCheck,
      text: "Active Adds",
      route: "/active-adds-services",
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

export default StrategicNavbar;
