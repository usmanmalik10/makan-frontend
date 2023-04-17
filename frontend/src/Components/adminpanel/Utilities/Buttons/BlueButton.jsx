import React from "react";
import "./style.css";

const BlueButton = (props) => {
  return (
    <button className="blue-button" onClick={props.handleView}>
      {props.label}
    </button>
  );
};

export default BlueButton;
