import React, { useContext } from "react";
import "./card.css";
import { Cardimg } from "../../Pages/HomePage/HomePage";

function Card(props) {
  const x = useContext(Cardimg);

  return (
    <div className="singlecard">
      <img src={props.img} alt="pic" />
      <div>{x.e.name}</div>
      <div>{x.e.email}</div>
    </div>
  );
}

export default Card;
