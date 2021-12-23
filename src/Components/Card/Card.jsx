import React from "react";
import "./card.css";

function Card(props) {
  return (
    <div className="singlecard">
      <img src={props.data.avatar} alt="pic" />
      <div>{props.data.name}</div>
      <div>{props.data.email}</div>
    </div>
  );
}

export default Card;
