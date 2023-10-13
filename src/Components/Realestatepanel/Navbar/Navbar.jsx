import React from "react";
import { BiHomeSmile } from "react-icons/bi";
import { GiHomeGarage } from "react-icons/gi";
import { RiNewspaperLine } from "react-icons/ri";
import { RiSettingsLine } from "react-icons/ri";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import "./style.css";
import { BsCashCoin } from "react-icons/bs";

const Navbar = () => {
  const navList = [
    {
      icon: BiHomeSmile,
      text: "Dashboard",
      route: "/estatealldata",
    },
    {
      icon: GiHomeGarage,
      text: "House For Rent",
      route: "/forrent",
    },
    {
      icon: RiNewspaperLine,
      text: "House For Sale",
      route: "/forsale",
    },
    {
      icon: BsCashCoin,
      text: "Plots For Sale",
      route: "/plotssale",
    },
    {
      icon: RiSettingsLine,
      text: "Plots For Rent",
      route: "/plotforrent",
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
