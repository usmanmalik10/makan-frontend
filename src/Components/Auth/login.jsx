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

import { useForm, Controller } from 'react-hook-form';
import { toast } from "react-toastify";
// const LOGIN_URL = '/auth';

export const Login = () => {


  const [eye, setEye] = useState();

 
  const { setAuth } = useAuth();
  console.log()
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );


  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
       const roleroute = {
      admin:'/admin-profile',
      user: '/user-profile',
      realEstate:'/estatealldata',
      serviceProvider:'/services-profile',
      shopKeeper:'/stores-profile',
      strategicSalePartner : '/strategic-sale-partner-profile',
    };

    // Determine if the input is an email or a  phone number
    const isEmail = /\S+@\S+\.\S+/.test(data.emailOrPhone);
    const loginType = isEmail ? 'email' : 'phoneNumber';
   authService.login({
    [loginType] : data.emailOrPhone , 
    password : data.password
  }).then((response) => {
      console.log("responselogin", response)
      const username = response?.user?.username;
      console.log("username",username);
      localStorage.setItem('username', username);

      const Userid = response?.user?.id;
      console.log("Userid",Userid);
      localStorage.setItem('Userid', Userid);
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
      console.log(roleroute[roles])
      navigate(roleroute[roles], { replace: true });
      console.log("rolesafter",roles);
      dispatch(login({
        success : true , 
        response 

      }))

      toast.success('Logged In 😆') ;
    }).catch((err) => {
      dispatch(login({
        success: false,
        response: err,
      }))
    
      let message;
      if (err.response && err.response.status === 401) {
        message = 'Authentication failed. Please check your credentials.';
      } else {
        message = err.response?.data?.message || err.message || 'An error occurred.';
      }
      toast.error(message);
    })

  }
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <Controller
          name="emailOrPhone"
          control={control}
          defaultValue=""
          rules={{
            required: 'Email/Phone is required',
            validate: (value) =>
              /\S+@\S+\.\S+/.test(value) || /^03[0-9]{9}$/.test(value)
                ? true
                : 'Please enter a valid email or  phone number',
          }}
          render={({ field }) => (
            <input
              {...field}
              className="login-inputfield-1"
              type="text"
              placeholder="Email/Phone No"
            />
          )}
        />
        {errors.emailOrPhone && (
          <p className="error-message">{errors.emailOrPhone.message}</p>
        )}
      </div>

      {/* Password Input */}
      <div className="login-inputfield-container-2">
        <img src={Lock} className="login-inputicon" alt="icon" />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          rules={{ required: 'Password is required' }}
          render={({ field }) => (
            <>
              <input
                {...field}
                className="login-inputfield-1"
                type={eye ? 'text' : 'password'}
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
            </>
          )}
        />
        {errors.password && (
          <p className="error-message">{errors.password.message}</p>
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
                {/* <div className="social_buttons">
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
              </div> */}
              </div>
            </Grid>
          </Grid>
        </div>
      </form>
    </>
  )
}
