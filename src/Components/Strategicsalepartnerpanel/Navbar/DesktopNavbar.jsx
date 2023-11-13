import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logoicon from "../../../images/logoicon.png";
import { BiLogOut } from "react-icons/bi";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../../../Redux/Slices/authSlice";

const DesktopNavbar = (props) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const onlogout = () => {
    dispatch(logout());
    dispatch(reset());
      }

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
              <div className="sub-nav-link mt-4" key={item.route}>
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
      <button className="logout-wrapper" onClick={onlogout}>
        <div><BiLogOut className="logout-icon" /></div>
        <div>Logout</div>
      </button>
    </>
  );
};

export default DesktopNavbar;
