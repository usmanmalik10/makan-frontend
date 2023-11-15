import React from "react";
import Cards from "./Cards";
import { FiUsers } from "react-icons/fi";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { FaStore } from "react-icons/fa";
import { BiHomeSmile } from "react-icons/bi";
import "./style.css";

const Dashboard = () => {
  const dummyCards = [
    {
      icon: FiUsers,
      stats: 0,
      description: "Active Users",
      backgroundColor: "#8BB7A2",
    },
    {
      icon: MdOutlineBusinessCenter,
      stats: 0,
      description: "Active Business",
      backgroundColor: "#4D4E8D ",
    },
    {
      icon: FaStore,
      stats: 0,
      description: "Active Store",
      backgroundColor: "#636C79",
    },
    {
      icon: BiHomeSmile,
      stats: 0,
      description: "Real Estate",
      backgroundColor: "#8884d8",
    },
    {
      icon: FiUsers,
      stats: 0,
      description: "Strategic Sales Partner",
      backgroundColor: "#636C79",
    },
  ];
  return (
    <div className="dashboard_wrapper">
      <div>
        <h1 className="dashboard-header-text">Dashboard</h1>
        <div className="card-container">
          {dummyCards.map((e, i) => (
            <Cards 
              icon={e.icon}
              stats={e.stats}
              description={e.description}
              backgroundColor={e.backgroundColor}
            />
          ))}
        </div>
      </div>
    </div>

  );
};

export default Dashboard;
