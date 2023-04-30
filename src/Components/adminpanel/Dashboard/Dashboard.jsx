import React from "react";
import Cards from "./Cards";
import { FiUsers } from "react-icons/fi";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { FaStore } from "react-icons/fa";
import "./style.css";
import Navbar from '../Navbar/Navbar';

const Dashboard = () => {
  const dummyCards = [
    {
      icon: FiUsers,
      stats: 1200,
      description: "Active Users",
      backgroundColor: "#8BB7A2",
    },
    {
      icon: MdOutlineBusinessCenter,
      stats: 6000,
      description: "Active Business",
      backgroundColor: "#4D4E8D ",
    },
    {
      icon: FaStore,
      stats: 8000,
      description: "Active Store",
      backgroundColor: "#636C79",
    },
  ];
  return (
    <div className="dashboard_wrapper">
      <div><Navbar /></div>
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
