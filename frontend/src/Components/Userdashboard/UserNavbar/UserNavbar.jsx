import React from "react";
import { BiHomeSmile } from "react-icons/bi";
import { TbUsers } from "react-icons/tb";
import { RiNewspaperLine } from "react-icons/ri";
// import { RiSettingsLine } from "react-icons/ri";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import "./style.css";

const UserNavbar = () => {
  const navList = [
    {
      icon: BiHomeSmile,
      text: "Profile",
      route: "/",
    },
    {
      icon: TbUsers,
      text: "My Orders",
      route: "/myorders",
    },
    {
      icon: RiNewspaperLine,
      text: "Previous Orders",
      route: "/previousorders",
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

export default UserNavbar;
