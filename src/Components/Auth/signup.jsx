import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import LoginPic from "../../images/LoginPic.png";
import handicon from "../../images/handicon.png";
import Lock from "../../images/Lock.png";
import Inbox from "../../images/Inbox.png";
import homelogo from "../../Assets/Home-Screen/homelogo.png";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import { FiPhone } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../../features/auth/authSlice";
import Spinner from "../Common/spinner/spinner";
import "./style.css";
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import google_logo from "../../Assets/Auth-Screen/Group 46060.png";
import facebook_logo from "../../Assets/Auth-Screen/Group 46061.png";

export const Signup = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "", role:"", phoneNumber:"", address:"" });
  console.log(formData);
  const { username, email, password, role, phoneNumber, address } = formData;
  const [eye, setEye] = useState();

  const location = useLocation(); // Use useLocation to access location object
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/login";
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  // useEffect(() => {
  //   if (isError) {
  //     toast.error(message);
  //   }
  //   if (isSuccess || user) {
  //     // navigate("/login");
  //   }
  //   dispatch(reset())
  // }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    console.log(e.target.name);
    setFormData((preState) => ({
      ...preState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      username,
      email,
      password,
      role,
      phoneNumber,
      address
    };
    console.log("userData", userData);

    await dispatch(register(userData)).unwrap();
    navigate(from, { replace: true });
  };

  if (isLoading) {
    return <Spinner />
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
              className="signup-right-form-wrapper "
            >
              <div className="right-form-main-wrapper">
                <div className="right-form-container">
                  <img src={LoginPic} alt="" className="login-icon" />
                  <h1 className="login-text">Sign Up</h1>
                </div>

                <div className="right-form-container">
                  <p className="filldetails-text">Fill your details to Sign Up</p>
                </div>

                <div className="login-input_container">
                  <div className="login-inputfield-container-2">
                    {<FaUserAlt className="login-inputicon" />}
                    <input
                      className="login-inputfield-1"
                      required
                      type="text"
                      id="username"
                      name="username"
                      value={username}
                      onChange={onChange}
                      placeholder="User Name"
                    />
                  </div>
                  <div className="login-inputfield-container-2">
                    <img src={Inbox} className="login-inputicon" alt="icon" />
                    <input
                      className="login-inputfield-1"
                      required
                      type="text"
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
                  <div className="login-inputfield-container-2">
                    {<ImUsers className="login-inputicon" />}

                    <Form.Select value={role} onChange={onChange} name="role" className="login-inputfield-select">
                      <option>Select Role</option>
                      <option value="user">user</option>
                      <option value="shopKeeper">Business</option>
                      <option value="realEstate">RealEstate</option>
                      <option value="serviceProvider">Service</option>
                    </Form.Select>

                  </div>
                  <div className="login-inputfield-container-2">
                    {<FiPhone className="login-inputicon" />}
                    <input
                      className="login-inputfield-1"
                      required
                      type="phoneNumber"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={phoneNumber}
                      onChange={onChange}
                      placeholder="Phone No"
                    />
                  </div>
                  <div className="login-inputfield-container-2">
                    {<FiPhone className="login-inputicon" />}
                    <input
                      className="login-inputfield-1"
                      required
                      type="text"
                      id="address"
                      name="address"
                      value={address}
                      onChange={onChange}
                      placeholder="Address"
                    />
                  </div>
                  <div className="description">
                    <div className="login_text">Already have an account? </div>
                    <div className="login_link"><Link className="login_link" to="/login"><div>Login</div></Link></div>
                  </div>

                  <div className="login-button">
                    <button type="submit" >Sign Up</button>
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
