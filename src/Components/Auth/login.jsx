import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import LoginPic from "../../images/LoginPic.png";
import handicon from "../../images/handicon.png";
import Lock from "../../images/Lock.png";
import Inbox from "../../images/Inbox.png";
import homelogo from "../../Assets/Home-Screen/homelogo.png";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/auth/authSlice";
import useAuth from "../../hooks/useAuth";
import authService from "../../features/auth/authService";
import Spinner from "../Common/spinner/spinner";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import google_logo from "../../Assets/Auth-Screen/Group 46060.png";
import facebook_logo from "../../Assets/Auth-Screen/Group 46061.png";

// const LOGIN_URL = '/auth';

export const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { email, password } = formData;
  const [eye, setEye] = useState();
  const [username, setUsername] = useState('');
  const [pwd, setPwd] = useState('');
  const [roles, setRoles] = useState('');
  const [accessToken, setAccessToken] = useState('');

  const { setAuth } = useAuth();
  console.log()
  const navigate = useNavigate();
  const location = useLocation();
  // const from = location.state?.from?.pathname || "/";
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  // useEffect(() => {
  //   if (isSuccess || user) {
  //     navigate(from, { replace: true });
  //   }
  // }, [user, isError, isSuccess, message, navigate, dispatch, from]);

  const onChange = (e) => {
    console.log(e.target.name);
    setFormData((preState) => ({
      ...preState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = {
      email,
      password,
    };

    const roleroute = {
      admin:'/admin-profile',
      user: '/user-profile',
      realEstate:'/estatealldata',
      serviceProvider:'/services-profile',
      shopKeeper:'/stores-profile',
    };
    
    authService.login(loginData).then((response) => {
      console.log("responselogin", response)
      const username = response?.user?.username;
      console.log("username",username);
      localStorage.setItem('username', username);
      // setUsername(username);
      const password = response?.user?.password;
      console.log("password",password);
      localStorage.setItem('password', password);
      // setPwd(pwd);
      const roles = response?.user?.role;
      console.log("roles",roles);
      localStorage.setItem('roles', roles);
      // setRoles(roles);
      const accessToken = response?.tokens?.access?.token;
      console.log("accessToken",accessToken);
      localStorage.setItem('accessToken', accessToken);
      // setAccessToken(accessToken);
      setAuth({ username, password, roles, accessToken });
      navigate(roleroute[roles], { replace: true });
      console.log("rolesafter",roles);
    });

    await dispatch(login(loginData)).unwrap();
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
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
                    <img src={Inbox} className="login-inputicon" alt="icon" />
                    <input
                      className="login-inputfield-1"
                      required
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={onChange}
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="login-inputfield-container-2">
                    <img src={Lock} className="login-inputicon" alt="icon" />
                    <input
                      className="login-inputfield-1"
                      required
                      type={eye ? "text" : "password"}
                      id="password"
                      name="password"
                      value={password}
                      onChange={onChange}
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
                  <div className="description">
                    <div className="signup_text">Don't have an account? </div>
                    <div className="signup_link">
                      <Link className="signup_link" to="/register">
                        <div>SignUp</div>
                      </Link>
                    </div>
                  </div>
                  <div className="forgotpassword-container">
                    <p>Forgot Password?</p>
                  </div>

                  <div className="login-button">
                    <button type="submit" >Login</button>
                  </div>
               
                </div>
                <div className="social_buttons">
                <div className="google_button">
                  <div className="google_logo">
                    <img src={google_logo} alt="google_logo" />
                  </div>
                  <div className="google_des">continue with google</div>
                </div>
                <div className="facebook_button">
                  <div className="facebook_logo">
                    <img src={facebook_logo} alt="facebook_logo" />
                  </div>
                  <div className="facebook_des">continue with facebook</div>
                </div>
              </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </form>
    </>
  )
}
