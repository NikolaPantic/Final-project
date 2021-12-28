import React, { useContext } from "react";
import { Dino } from "../../App";
import "./card.css";

function Card(props) {
  const x = useContext(Dino);

  return (
    <div
      onClick={() => {
        x.setSinglePerson(props.e.id);
        x.setSingleCandidateReports(
          x.reports.filter((e) => e.candidateId === props.e.id)
        );
      }}
      className="singlecard"
    >
      <div className="card-image-div">
        <img src={props.e.avatar} alt="" />
      </div>
      <div className="card-name">{props.e.name}</div>
      <div className="card-email">{props.e.email.toLowerCase()}</div>
    </div>
  );
}

export default Card;
