import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logoicon from "../../../images/logoicon.png";
import { BiLogOut } from "react-icons/bi";
import "./style.css";

const DesktopNavbar = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <div className="navbar-wrappper">
        <div>
          <div className="navbar-header">
            <img src={logoicon} alt="" />
            <h1>Makan Manager</h1>
          </div>
          <div className="nav-links">
            {props.navList.map((item) => (
              <div className="sub-nav-link" key={item.route}>
                <item.icon className="nav-icon" />
                <p
                  className="nav-text"
                  onClick={() => navigate(item.route)}
                  style={{
                    color: location.pathname === item.route && "white",
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="logout-wrapper">
        <BiLogOut className="logout-icon" />
        <p onClick={() => navigate("/Busisnesslogin")}>Logout</p>
      </div>
    </>
  );
};

export default DesktopNavbar;
