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
      icon: TbUsers,
      text: "Create SSL",
      route: "/strategic-sale-partner",
    },
    {
      icon: TbUsers,
      text: "All SSL",
      route: "/all-strategic-sale-partner",
    },
    {
      icon: RiNewspaperLine,
      text: "Services",
      route: "",
      submenu: [ // Add submenu for the "Users" menu item
      {
        text: "Mason",
        route: "/admin-mason",
      },
      {
        text: "Marble/Tile Fixer",
        route: "/admin-marble-tile-fixer",
      },
      {
        text: "Plumber",
        route: "/admin-plumber",
      },
      {
        text: "Contractor",
        route: "/admin-contractor",
      },
      {
        text: "Engineer",
        route: "/admin-engineer",
      },
      {
        text: "Architect",
        route: "/admin-architect",
      },
      {
        text: "Carpenter",
        route: "/admin-carpenter",
      },
      {
        text: "Wood Cutter",
        route: "/admin-wood-cutter",
      },
      {
        text: "Painter",
        route: "/admin-painter",
      },
      {
        text: "Polish Man (Furnture)",
        route: "/admin-polish-man",
      },
      {
        text: "Steel Fixer/Welder",
        route: "/admin-steel-fixer",
      },
      {
        text: "Steel Polish",
        route: "/admin-steel-polish",
      },
      {
        text: "Welder",
        route: "/admin-welder",
      },
      {
        text: "Molding Worker",
        route: "/admin-molding-worker",
      },
      {
        text: "Leith Machine Operator",
        route: "/admin-Leith-machine-operator",
      },
      {
        text: "Aluminum Fixer",
        route: "/admin-aluminum-fixer",
      },
      {
        text: "Glass Fixer",
        route: "/admin-glass-fixer",
      },
      {
        text: "Glass Cutting & Polish",
        route: "/admin-glass-cutting-polish",
      },
      {
        text: "Glass Painter",
        route: "/admin-glass-painter",
      },
      {
        text: "Glass Paper and Designer",
        route: "/admin-glass-designer",
      },
      {
        text: "Electrician",
        route: "/admin-electrician",
      },
      {
        text: "AC Technician",
        route: "/admin-ac-technician",
      },
      {
        text: "Electric Engineer",
        route: "/admin-electric-engineer",
      },
      {
        text: "Solar Installer",
        route: "/admin-solar-installer",
      },
      {
        text: "Boring Workers",
        route: "/admin-boring-workers",
      },
      {
        text: "Interior Designer",
        route: "/admin-interior-designer",
      },
      {
        text: "Termite Treatment",
        route: "/admin-termite-treatment",
      },
      {
        text: "Gardener",
        route: "/admin-gardener",
      },
      {
        text: "Landscape Architect",
        route: "/admin-landscape-architect",
      },
      {
        text: "House Cleaner",
        route: "/admin-house-cleaner",
      },
    ],
    },
    {
      icon: RiNewspaperLine,
      text: "Stores",
      route: '',
      submenu: [ // Add submenu for the "Users" menu item
      {
        text: "Building Material",
        route: "/admin-building-material",
      },
      {
        text: "Bricks",
        route: "/admin-bricks",
      },
      {
        text: "Marble/Tile",
        route: "/admin-marble-tile",
      },
      {
        text: "Ceramics",
        route: "/admin-ceramics",
      },
      {
        text: "Sanitary",
        route: "/admin-sanitary",
      },
      {
        text: "Boring Material",
        route: "/admin-boring-material",
      },
      {
        text: "Wood",
        route: "/admin-wood",
      },
      {
        text: "Timber",
        route: "/admin-timber",
      },
      {
        text: "Paint",
        route: "/admin-paint",
      },
      {
        text: "Steel",
        route: "/admin-steel",
      },
      {
        text: "Iron",
        route: "/admin-iron",
      },
      {
        text: "Aluminum",
        route: "/admin-aluminum",
      },
      {
        text: "Glass",
        route: "/admin-glass",
      },
      {
        text: "Hardware",
        route: "/admin-hardware",
      },
      {
        text: "Electronics",
        route: "/admin-electronics",
      },
      {
        text: "Electric",
        route: "/admin-electric",
      },
      {
        text: "Wall Panelling",
        route: "/admin-wall-panelling",
      },
      {
        text: "Solar System",
        route: "/admin-solar-system",
      },
      {
        text: "Nursery",
        route: "/admin-nursery",
      },
      {
        text: "Concrete Plant",
        route: "/admin-concrete-plant",
      },
      {
        text: "Interior Decoration",
        route: "/admin-interior-decoration",
      },
      {
        text: "Lights",
        route: "/admin-lights",
      },
      {
        text: "Furniture",
        route: "/admin-furniture",
      },
      {
        text: "Security",
        route: "/admin-security",
      },
      {
        text: "Termite Protection",
        route: "/admin-termite-protection",
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
