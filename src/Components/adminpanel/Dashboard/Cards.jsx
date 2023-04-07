import React from "react";
import "./style.css";

const Cards = (props) => {
  return (
    <div className="card-wrapper" style={{ background: props.backgroundColor }}>
      <props.icon className="icon" />
      <h1 className="stats">{props.stats}</h1>
      <p className="card-description">{props.description}</p>
    </div>
  );
};

export default Cards;
