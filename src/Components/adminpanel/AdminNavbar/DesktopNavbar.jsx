import React, { useState, useEffect, useMemo } from "react";
import { useLocation, useNavigate, Link, NavLink, } from "react-router-dom";
import logoicon from "../../../Assets/Auth-Screen/logoicon.png";
import { BiLogOut } from "react-icons/bi";
import { FiChevronDown, FiChevronUp } from "react-icons/fi"; // Added dropdown icons
import { AiOutlineHome, AiOutlineUser, AiOutlineBank, AiOutlineSetting } from "react-icons/ai";
import { RiArticleLine } from "react-icons/ri";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../../../features/auth/authSlice";

const DesktopNavbar = (props) => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [showSubMenu, setShowSubMenu] = useState(false); // State to control submenu visibility

  const onlogout = () => {
    dispatch(logout());
    dispatch(reset());
      }

  // Function to toggle submenu visibility
  const toggleSubMenu = (event, route) => {
    event.stopPropagation(); // Stop event propagation to prevent navigation
    setShowSubMenu((prevSubMenuState) => {
      // Toggle the submenu only for the corresponding menu item
      if (prevSubMenuState === route) {
        return null; // Close the submenu if it's already open
      } else {
        return route; // Open the submenu for the clicked menu item
      }
    });
  };


  // Function to handle clicking outside the submenu to close it
  const handleOutsideClick = (event) => {
    if (showSubMenu && !event.target.closest(".sub-nav-link")) {
      setShowSubMenu(false);
    }
  };

  // Attach click event listener to handle outside clicks
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
            <img src={logoicon} alt="" />
            <h1>Makan Manager</h1>
          </div>
          <div className="nav-links">
            {props.navList.map((item) => (
              <div className="sub-nav-link" key={item.route}>
                <item.icon className="nav-icon" />
                <div
                  className={`nav-item ${location.pathname === item.route ? "active" : ""}`}
                  onClick={() => navigate(item.route)}
                >
                  {/* {item.icon && <item.icon className="nav-icon" />} */}
                  <div style={{ with: "100%", height: "auto", display: "flex", justifyContent: "end" }}>
                    <p style={{ marginBottom: "0px" }} className="nav-text">{item.text}</p>
                    {item.submenu && ( // Render the dropdown icon if submenu is available
                      <div
                        className="dropdown-icon"
                        onClick={(event) => toggleSubMenu(event, item.route)}
                      >
                        {showSubMenu === item.route ? <FiChevronUp /> : <FiChevronDown />}
                      </div>
                    )}
                  </div>
                  <div>
                    {item.submenu && showSubMenu === item.route && (
                      // Render the submenu only if showSubMenu matches the current menu item's route
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
                </div>

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
