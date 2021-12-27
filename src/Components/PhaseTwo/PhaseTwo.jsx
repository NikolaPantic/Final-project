import React, { useContext, useEffect, useState } from "react";
import { Dino } from "../../App";
import Search from "../../Components/Search/Search.jsx";
import "./phasetwo.css";

function PhaseTwo(props) {
  const dino = useContext(Dino);
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/api/companies")
      .then((res) => res.json())
      .then((res) => setCompanies(res));
  }, []);

  return (
    <div className={props.phase === "two show" ? "two show" : "two hide"}>
      <Search></Search>
      <div className="company-lists">
        {companies.map((e) => (
          <h3
            className="company-name"
            key={e.id}
            onClick={() => {
              dino.setCompanyName(e.name);
              dino.setCompanyID(e.id);
            }}
          >
            {e.name}
          </h3>
        ))}
      </div>
      <div className="phase-two-buttons">
        <button onClick={() => props.setPhase("one show")}>BACK</button>
        <button
          onClick={() =>
            dino.companyname !== ""
              ? props.setPhase("three show")
              : props.setPhase("two show")
          }
        >
          NEXT
        </button>
      </div>
    </div>
  );
}

export default PhaseTwo;
