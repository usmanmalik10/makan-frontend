import React from 'react'
import './spinner2.scss'
import { RotatingLines } from 'react-loader-spinner'
import logo from "../../../Assets/Home-Screen/Group 46112.png";

const Spinner2 = () => {
  return (
    <div className="loding_wrap2">
      <div className="logo_div">
        <img width={100} src={logo} className="logo" alt="logo" />
        <div className="text_wrap">
          <div className="text">Makan Manager</div>
          <div className="sub_text">
            Anything you want
          </div>
        </div>
      </div>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="6"
        animationDuration="0.75"
        width="70"
        visible={true}
      />;
    </div>
  )
}

export default Spinner2