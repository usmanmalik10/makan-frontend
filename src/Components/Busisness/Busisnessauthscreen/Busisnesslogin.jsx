import React, { useState } from "react";
import { Grid } from "@mui/material";
import LoginPic from "../../../images/LoginPic.png";
import handicon from "../../../images/handicon.png";
import Lock from "../../../images/Lock.png";
import Inbox from "../../../images/Inbox.png";
import homelogo from "../../../images/logoicon.png";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "./style.css";
import useAuth from "../../../hooks/useAuth";

export const Busisnesslogin = () => {
  const { setAuth } = useAuth();
    const [eye, setEye] = useState();
  const navigate = useNavigate();
  return (
    <div className="login-wrapper">
    <Grid container>
      <Grid item xs={12} sm={12} md={6} lg={6} className="left-wrapper">
        <div className="left-sub-wrapper">
          <img src={homelogo} alt="" className="homelogo-image" />
          <img src={handicon} alt="" className="hand-image" />
        </div>
      </Grid>

      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        lg={6}
        className="right-form-wrapper "
      >
        <div className="right-form-main-wrapper">
          <div className="right-form-container">
            <img src={LoginPic} alt="" className="login-icon" />
            <h1 className="login-text">Log In</h1>
          </div>

          <div className="right-form-container">
            <p className="filldetails-text">Fill your details to login in</p>
          </div>

          <div className="login-input_container">
            <div className="login-inputfield-container-2">
              <img src={Inbox} className="login-inputicon" />
              <input
                className="login-inputfield-1"
                required
                type="email"
                placeholder="Email Address"
              />
            </div>
            <div className="login-inputfield-container-2">
              <img src={Lock} className="login-inputicon" />
              <input
                className="login-inputfield-1"
                required
                type={eye ? "text" : "password"}
                placeholder="Password"
              />
              {eye ? (
                <AiOutlineEye
                  className="login-inputicon-eye"
                  onClick={() => setEye(!eye)}
                />
              ) : (
                <AiOutlineEyeInvisible
                  className="login-inputicon-eye"
                  onClick={() => setEye(!eye)}
                />
              )}
            </div>
            <div className="forgotpassword-container">
              <p>Forgot Password?</p>
            </div>

            <div className="login-button">
              <button onClick={() => navigate("/")}>Login</button>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  </div>
  )
}
