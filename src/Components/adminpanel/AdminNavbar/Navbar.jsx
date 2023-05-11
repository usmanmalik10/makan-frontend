import React from "react";
import { BiHomeSmile } from "react-icons/bi";
import { TbUsers } from "react-icons/tb";
import { RiNewspaperLine } from "react-icons/ri";
import { RiSettingsLine } from "react-icons/ri";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import "./style.css";

const Navbar = () => {
  const navList = [
    {
      icon: BiHomeSmile,
      text: "Dashboard",
      route: "/admin-profile",
    },
    {
      icon: TbUsers,
      text: "Users",
      route: "/user-list",
    },
    {
      icon: RiNewspaperLine,
      text: "Business",
      route: "/businesses",
    },
    {
      icon: RiNewspaperLine,
      text: "Real Estate",
      route: "/real-estate",
    },
    {
      icon: RiSettingsLine,
      text: "Settings",
      route: "/settings",
    },
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

export default Navbar;