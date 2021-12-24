import React, { useContext } from "react";
import "./cardcreate.css";
import { Phasecontext } from "../../Pages/CreateReport/CreateReport.jsx"

function CardCreate(props) {
  const info = useContext(Phasecontext)
  return (
    <div className="card-create" onClick={() => {
      info.setNameCreate(props.name);
      info.setIDCreate(props.id)
    }}>

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
