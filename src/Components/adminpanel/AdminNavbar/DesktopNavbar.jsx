// DesktopNavbar.js
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logoicon from "../../../Assets/Auth-Screen/logoicon.png";
import { BiLogOut } from "react-icons/bi";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import "./style.css";
import { useDispatch } from "react-redux";
import { logout, reset } from "../../../Redux/Slices/authSlice";

const DesktopNavbar = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation(); // Use the useLocation hook
  const [showSubMenu, setShowSubMenu] = useState(false);

  const onlogout = () => {
    dispatch(logout());
    dispatch(reset());
  };

  const toggleSubMenu = (event, text) => {
    event.stopPropagation();
    setShowSubMenu((prevText) => (prevText === text ? null : text));
  };

  const handleOutsideClick = (event) => {
    if (showSubMenu && !event.target.closest(".sub-nav-link")) {
      setShowSubMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  
  return (
    <>
   <div className="navbar-wrappper">
      <div>
        <div className="navbar-header">
          <img src={logoicon} alt="Logo" />
          <h1>Makan Manager</h1>
        </div>
        <div className="nav-links">
          {props.navList.map((item) => (
            <div className="sub-nav-link" key={item.route}>
              <item.icon className="nav-icon" />
              <div
                className={`nav-item ${
                  location.pathname === item.route ? "active" : ""
                }`}
                onClick={() => navigate(item.route)}
              >
                {/* Your menu item content */}
                <div
                    style={{
                      with: "100%",
                      height: "auto",
                      display: "flex",
                      justifyContent: "end",
                    }}
                  >
                    <p style={{ marginBottom: "0px" }} className="nav-text">
                      {item.text}
                    </p>
                    {item.submenu && (
                      <div
                        className="dropdown-icon"
                        onClick={(event) => toggleSubMenu(event, item.text)}
                      >
                        {showSubMenu === item.text ? (
                          <FiChevronUp />
                        ) : (
                          <FiChevronDown />
                        )}
                      </div>
                    )}
                  </div>
              </div>
              {/* {item.submenu && (
                <div
                  className="dropdown-icon"
                  onClick={(event) => toggleSubMenu(event, item.route)}
                >
                  {showSubMenu === item.route ? <FiChevronUp /> : <FiChevronDown />}
                </div>
              )} */}
              {item.submenu && showSubMenu === item.text && (
                <div className="submenu">
                  {item.submenu.map((subitem) => (
                    <p
                      className="sub-nav-text"
                      key={subitem.route}
                      onClick={() => navigate(subitem.route)}
                    >
                      {subitem.text}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    <button className="logout-wrapper" onClick={onlogout}>
      <div>
        <BiLogOut className="logout-icon" />
      </div>
      <div>Logout</div>
    </button>
    </>
  );
};

export default DesktopNavbar;
