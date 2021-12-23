import React from "react";
import "./phasetwo.css";
import Search from "../../Components/Search/Search.jsx";

function PhaseTwo() {
  return (
    <div className="phase-two">
      <Search></Search>
      <div className="company-lists">
          <h3 className="company-name">BIT</h3>
          <h3 className="company-name">BIT</h3>
          <h3 className="company-name">BIT</h3>
          <h3 className="company-name">BIT</h3>
          <h3 className="company-name">BIT</h3>
      </div>
      <div className="phase-two-buttons">
        <button>BACK</button>
        <button>NEXT</button>
      </div>
    </div>
  );
}

export default PhaseTwo;
