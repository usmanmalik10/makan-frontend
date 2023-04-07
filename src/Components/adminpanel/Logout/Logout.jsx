import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
const Logout = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <h1 className="dashboard-header-text">Logout</h1>
      </div>
      <div className="logout-outer-container">
        <div className="logout-inner-container">
          <h1>Logout</h1>
          <h2>Are you sure!</h2>
          <div className="logout-button-container">
            <button className="logout-button">Cancel</button>
            <button
              className="cancel-button"
              onClick={() => navigate("/login")}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logout;
