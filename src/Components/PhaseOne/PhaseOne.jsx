import React from "react";
import "./phaseone.css";
import CardCreate from "../../Components/CardCreate/CardCreate.jsx";
import Search from "../../Components/Search/Search.jsx";

function PhaseOne() {
  return (
    <div className="phase-one">
      <Search></Search>
      <div className="card-create-wrap">
        <CardCreate></CardCreate>
      </div>
      <button>NEXT</button>
    </div>
  );
}

export default PhaseOne;
