import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import LoginPic from "../../images/LoginPic.png";
import handicon from "../../images/handicon.png";
import Lock from "../../images/Lock.png";
import Inbox from "../../images/Inbox.png";
import homelogo from "../../Assets/Home-Screen/homelogo.png";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { FaRegAddressCard, FaUserAlt } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import { FiPhone } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../../features/auth/authSlice";
import Spinner from "../Common/spinner/spinner";
import "./style.css";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import google_logo from "../../Assets/Auth-Screen/Group 46060.png";
import facebook_logo from "../../Assets/Auth-Screen/Group 46061.png";
import { useForm, Controller } from "react-hook-form";

export const Signup = () => {
  
  const location = useLocation(); // Use useLocation to access location object
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const roleRouteMap = {
    admin:'/admin-profile',
    user: '/user-profile',
    realEstate:'/estatealldata',
    serviceProvider:'/services-profile',
    shopKeeper:'/stores-profile',
    strategicSalePartner : '/strategic-sale-partner-profile',
  };
  const onSubmit = async (data) => {
    dispatch(register(data))
      .unwrap()
      .then((response) => {
        toast.success('Registration successful. Redirecting to your profile...');
        const role = response.user.role // assuming the role is returned in the response
       
        navigate(roleRouteMap[role] , { replace: true });
      })
      .catch((error) => {
        toast.error(error.message || 'Registration failed. Please try again.');
      });
  };

  const [eye, setEye] = useState();

  // const from = location.state?.from?.pathname || "/login";
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );



  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="login-wrapper">
          <Grid container>
            <Grid item xs={12} sm={12} md={6} lg={6} className="left-wrapper ">
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
              className="signup-right-form-wrapper "
            >
              <div className="right-form-main-wrapper mt-6">
                <div className="right-form-container  mt-">
                  <img src={LoginPic} alt="" className="login-icon" />
                  <h1 className="login-text">Sign Up</h1>
                </div>

                <div className="right-form-container">
                  <p className="filldetails-text">
                    Fill your details to Sign Up
                  </p>
                </div>

                <div className="login-input_container">
                  <div className="login-inputfield-container-2">
                    <FaUserAlt className="login-inputicon" />
                    <Controller
                      name="username"
                      control={control}
                      defaultValue=""
                      rules={{
                        required: "Username is required",
                        minLength: {
                          value: 4,
                          message: "Username must be at least 4 characters",
                        },
                      }}
                      render={({ field }) => (
                        <input
                          {...field}
                          className="login-inputfield-1"
                          type="text"
                          id="username"
                          placeholder="User Name"
                        />
                      )}
                    />
                    {errors.username && (
                      <p className="error-message">{errors.username.message}</p>
                    )}
                  </div>
                  <div className="login-inputfield-container-2">
                    <img
                      src={Inbox}
                      className="login-inputicon"
                      alt="email-icon"
                    />
                    <Controller
                      name="email"
                      control={control}
                      defaultValue=""
                      rules={{
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: "Invalid email address",
                        },
                      }}
                      render={({ field }) => (
                        <input
                          {...field}
                          className="login-inputfield-1"
                          type="text"
                          id="email"
                          placeholder="Email Address"
                        />
                      )}
                    />
                    {errors.email && (
                      <p className="error-message">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Password Input Field */}
                  <div className="login-inputfield-container-2">
        <img
          src={Lock}
          className="login-inputicon"
          alt="password-icon"
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          rules={{
            required: "Password is required",
            
            pattern: {
              value: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
              message: "Password must contain an uppercase letter, a number, and a special character",
            },
            // minLength: {
            //   value: 8,
            //   message: "Password must be at least 8 characters",
            // },
          }}
          render={({ field }) => (
            <input
              {...field}
              className="login-inputfield-1"
              type={eye ? "text" : "password"}
              id="password"
              placeholder="Password"
            />
          )}
        />
        {errors.password && (
          <p className="error-message">{errors.password.message}</p>
        )}
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
        )}</div>
                  <div className="login-inputfield-container-2">
                    <ImUsers className="login-inputicon" />
                    <Controller
                      name="role"
                      control={control}
                      defaultValue=""
                      rules={{
                        required: "Role is required",
                      }}
                      render={({ field }) => (
                        <select {...field} className="login-inputfield-select">
                          <option value="">Select Role</option>
                          <option value="user">User</option>
                          <option value="shopKeeper">Shop</option>
                          <option value="realEstate">Real Estate</option>
                          <option value="serviceProvider">Service</option>
                        </select>
                      )}
                    />
                    {errors.role && <p className="error-message">{errors.role.message}</p>}
                  </div>

                  {/* Phone Number Input */}
                  <div className="login-inputfield-container-2">
                    <FiPhone className="login-inputicon" />
                    <Controller
                      name="phoneNumber"
                      control={control}
                      defaultValue=""
                      rules={{
                        required: "Phone number is required",
                        pattern: {
                          value: /^03[0-9]{9}$/,
                          message: "Invalid Pakistani phone number",
                        },
                      }}
                      render={({ field }) => (
                        <input
                          {...field}
                          className="login-inputfield-1"
                          type="tel"
                          id="phoneNumber"
                          placeholder="Phone No"
                        />
                      )}
                    />
                    {errors.phoneNumber && <p className="error-message">{errors.phoneNumber.message}</p>}
                  </div>

                  {/* Address Input */}
                  <div className="login-inputfield-container-2">
                    <FaRegAddressCard className="login-inputicon" />
                    <Controller
                      name="address"
                      control={control}
                      defaultValue=""
                      rules={{
                        required: "Address is required",
                      }}
                      render={({ field }) => (
                        <input
                          {...field}
                          className="login-inputfield-1"
                          type="text"
                          id="address"
                          placeholder="Address"
                        />
                      )}
                    />
                    {errors.address && <p className="error-message">{errors.address.message}</p>}
                  </div>
                  <div className="description">
                    <div className="login_text">Already have an account? </div>
                    <div className="login_link">
                      <Link className="login_link" to="/login">
                        <div>Login</div>
                      </Link>
                    </div>
                  </div>

                  <div className="login-button">
                    <button type="submit">Sign Up</button>
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
  );
};
