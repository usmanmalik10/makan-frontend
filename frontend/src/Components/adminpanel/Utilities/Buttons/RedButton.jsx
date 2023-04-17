import React from "react";
import "./style.css";

const RedButton = (props) => {
  return (
    <button className="red-button" onClick={props.handleView}>
      {props.label}
    </button>
  );
};

export default RedButton;
