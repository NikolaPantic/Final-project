import React, { useContext } from "react";
import "./cardcreate.css";
import { Dino } from "../../App";

function CardCreate(props) {
  const dino = useContext(Dino);
  return (
    <div
      className="card-create"
      onClick={() => {
        dino.setNameCreate(props.name);
        dino.setIDCreate(props.id);
      }}
    >
      <div className="card-create-image">
        <img></img>
      </div>
      <div className="card-create-info">
        <h4>{props.name}</h4>
        <p>{props.email.toLowerCase()}</p>
      </div>
    </div>
  );
}

export default CardCreate;
