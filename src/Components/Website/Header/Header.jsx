import React, { useState } from "react";
import Logo from "../../../Assets/Home-Screen/Group 46111.png";
import "./header.css";
import {
  Navbar,
  Container,
  Nav,
} from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Header = ({ showF }) => {
  
  const [FCard, setFCard] = useState(false)
  const gotoCreateCollection = useNavigate()
  return (
    <>
      <div className="header-section dis2">
        <div className="logo_div">
          <div>
            <img className="logo" width={90} src={Logo} alt="logo"></img>
          </div>
          <div className="title">Makan Manager</div>
       
        </div>
        <div className="nav_links">
            <Link to="/"><div>Home</div></Link>
            <div><NavLink to="/aboutus">About-Us</NavLink></div>
            <div><NavLink to="/contactus">Contact-Us</NavLink></div>
            <div><NavLink to="/ourteam">Ourteam</NavLink></div>
            <div><NavLink to="/services">Services</NavLink></div>
            <div><NavLink to="/realestate">RealEstate</NavLink></div>
          </div>
        <div className="buttons_div d-flex">
          {showF ?
            <div className="search_page_f" onClick={() => setFCard(!FCard)}>F</div>
            :
            <div>
              <button
                // onClick={}
                className="button_1"
                type="button"
              >
                Sign In
              </button>
              <button
              //  onClick={}
                className="button_2">
                Sign Up
              </button>
            </div>}
        </div>
        <div className="f_click" style={{ display: FCard == false ? "none" : "block" }}>
          <div className="f_card_content">
            <div className="search_page_f">F</div>
            <div>   <div className="f_email">email.address</div>
              <div className="f_email2">email.address@gmail.com</div></div>

          </div>
          <div className="f_card_sep"></div>
          <div className="f_card_headingP">Profile Settings</div>
          <div className="f_card_headingC" onClick={() => gotoCreateCollection("/createcollection")}>Collections</div>
          <div className="f_card_sep"></div>
          <div className="f_card_text1">Provide Feedback</div>
          <div className="f_card_text">Privacy Policy</div>
          <div className="f_card_text">Terms and Conditions</div>
          <div className="f_card_text">Log Out</div>

        </div>
      </div>

      <div className="mob_nav dis-mob2">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Brand href="#home">
              <div className="mob_logo">
                <img className="logo" width={60} src={Logo} alt="logo"></img>
              </div>
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">
                  {" "}
                  <div className="mob_buttons">

                    <button
                      // onClick={}
                      className="button_1"
                      type="button"
                    >
                      Sign In
                    </button>
                    <button
                    //  onClick={}
                      className="button_2">
                      Sign Up
                    </button>
                  </div>
                
                 
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
