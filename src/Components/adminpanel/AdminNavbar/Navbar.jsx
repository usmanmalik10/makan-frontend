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
      text: "Services",
      // route: "/services",
      submenu: [ // Add submenu for the "Users" menu item
      {
        text: "Mason",
        route: "/mason",
      },
      {
        text: "Marble/Tile Fixer",
        route: "/marble/tile-fixer",
      },
      {
        text: "Plumber",
        route: "/plumber",
      },
      {
        text: "Contractor",
        route: "/contractor",
      },
      {
        text: "Engineer",
        route: "/engineer",
      },
      {
        text: "Architect",
        route: "/admin-architect",
      },
      {
        text: "Carpenter",
        route: "/carpenter",
      },
      {
        text: "Wood Cutter",
        route: "/wood-cutter",
      },
      {
        text: "Painter",
        route: "/painter",
      },
      {
        text: "Polish Man (Furnture)",
        route: "/polish-man",
      },
      {
        text: "Steel Fixer/Welder",
        route: "/steel-fixer",
      },
      {
        text: "Steel Polish",
        route: "/steel-polish",
      },
      {
        text: "Welder",
        route: "/welder",
      },
      {
        text: "Molding Worker",
        route: "/molding-worker",
      },
      {
        text: "Leith Machine Operator",
        route: "/Leith-machine-operator",
      },
      {
        text: "Aluminum Fixer",
        route: "/aluminum-fixer",
      },
      {
        text: "Glass Fixer",
        route: "/glass-fixer",
      },
      {
        text: "Glass Cutting & Polish",
        route: "/glass-cutting-polish",
      },
      {
        text: "Glass Painter",
        route: "/glass-painter",
      },
      {
        text: "Glass Paper and Designer",
        route: "/glass-designer",
      },
      {
        text: "Electrician",
        route: "/electrician",
      },
      {
        text: "AC Technician",
        route: "/ac-technician",
      },
      {
        text: "Electric Engineer",
        route: "/electric-engineer",
      },
      {
        text: "Solar Installer",
        route: "/solar-installer",
      },
      {
        text: "Boring Workers",
        route: "/boring-workers",
      },
      {
        text: "Interior Designer",
        route: "/interior-designer",
      },
      {
        text: "Termite Treatment",
        route: "/termite-treatment",
      },
      {
        text: "Gardener",
        route: "/gardener",
      },
      {
        text: "Landscape Architect",
        route: "/landscape-architect",
      },
      {
        text: "House Cleaner",
        route: "/house-cleaner",
      },
    ],
    },
    {
      icon: RiNewspaperLine,
      text: "Stores",
      route: "/stores",
      submenu: [ // Add submenu for the "Users" menu item
      {
        text: "Building Material",
        route: "/building-material",
      },
      {
        text: "Bricks",
        route: "/bricks",
      },
      {
        text: "Marble/Tile",
        route: "/marble-tile",
      },
      {
        text: "Ceramics",
        route: "/ceramics",
      },
      {
        text: "Sanitary",
        route: "/sanitary",
      },
      {
        text: "Boring Material",
        route: "/boring-material",
      },
      {
        text: "Wood",
        route: "/wood",
      },
      {
        text: "Timber",
        route: "/timber",
      },
      {
        text: "Paint",
        route: "/paint",
      },
      {
        text: "Steel",
        route: "/steel",
      },
      {
        text: "Iron",
        route: "/iron",
      },
      {
        text: "Aluminum",
        route: "/aluminum",
      },
      {
        text: "Glass",
        route: "/glass",
      },
      {
        text: "Hardware",
        route: "/hardware",
      },
      {
        text: "Electronics",
        route: "/electronics",
      },
      {
        text: "Electric",
        route: "/electric",
      },
      {
        text: "Wall Panelling",
        route: "/wall-panelling",
      },
      {
        text: "Solar System",
        route: "/solar-system",
      },
      {
        text: "Nursery",
        route: "/nursery",
      },
      {
        text: "Concrete Plant",
        route: "/concrete-plant",
      },
      {
        text: "Interior Decoration",
        route: "/interior-decoration",
      },
      {
        text: "Lights",
        route: "/lights",
      },
      {
        text: "Furniture",
        route: "/furniture",
      },
      {
        text: "Security",
        route: "/security",
      },
      {
        text: "Termite Protection",
        route: "/termite-protection",
      },
    ],
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
