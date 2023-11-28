import React from "react";
import { BiHomeSmile, BiNews } from "react-icons/bi";
import { TbUsers } from "react-icons/tb";
import { RiNewspaperLine } from "react-icons/ri";
import { RiSettingsLine } from "react-icons/ri";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import "./style.css";
import { AiOutlineFolderAdd } from "react-icons/ai";

const StoresNavbar = () => {
  const navList = [
    {
      icon: BiHomeSmile,
      text: "Profile",
      route: "/stores-profile",
    },
    {
      icon: AiOutlineFolderAdd,
      text: "Services Data",
      route: "/stores-services-data",
    },
    // {
    //   icon: AiOutlineFolderAdd,
    //   text: "New Add",
    //   route: "/new-add-stores",
    // },
    // {
    //   icon: BiNews,
    //   text: "Active Adds",
    //   route: "/active-adds-stores",
    // },
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

export default StoresNavbar;
