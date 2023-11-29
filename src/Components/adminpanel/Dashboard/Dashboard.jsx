import React from "react";
import Cards from "./Cards";
import { FiUsers } from "react-icons/fi";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { FaStore } from "react-icons/fa";
import { BiHomeSmile } from "react-icons/bi";
import "./style.css";
import { useFetchCountsQuery } from "../../../Redux/RtkQuery/Dashboard";
import Spinner2 from "../../Common/spinner2/spinner2";

const Dashboard = () => {

  const {data , isLoading , isSuccess , isError} = useFetchCountsQuery();
  if(isLoading) return (<Spinner2></Spinner2>)
  if(isError) return (<p>Error Data</p>)
  const counts = data;
  const dummyCards = [
    {
      icon: FiUsers,
      stats: counts.users,
      description: "Active Users",
      backgroundColor: "#8BB7A2",
    },
    {
      icon: MdOutlineBusinessCenter,
      stats: counts.ServiceProviders,
      description: "Active Service Providers",
      backgroundColor: "#4D4E8D ",
    },
    {
      icon: FaStore,
      stats: counts.shops,
      description: "Active Store",
      backgroundColor: "#636C79",
    },
    {
      icon: BiHomeSmile,
      stats: counts.realState,
      description: "Real Estate",
      backgroundColor: "#8884d8",
    },
    {
      icon: FiUsers,
      stats: counts.strategicSalePartners,
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
