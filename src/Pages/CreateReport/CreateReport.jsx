import React, { useContext, useState } from "react";
import PhaseOne from "../../Components/PhaseOne/PhaseOne.jsx";
import PhaseTwo from "../../Components/PhaseTwo/PhaseTwo.jsx";
import PhaseThree from "../../Components/PhaseThree/PhaseThree.jsx";
import Header from "../../Components/Header/Header.jsx";
import "./createreport.css";
import { Dino } from "../../App";

function CreateReport() {
  const dino = useContext(Dino);

  const [phase, setPhase] = useState("one show");

  return (
    <div className="create-reports">
      <Header></Header>
      <div className="create-reports-container">
        <div className="create-reports-stages-and-info">
          <div className="create-reports-stages">
            <div>
              {phase === "one show" ? (
                <b>1 Select Candidate</b>
              ) : (
                "1 Select Candidate"
              )}
            </div>
            <div>
              {phase === "two show" ? (
                <b>2 Select Company</b>
              ) : (
                "2 Select Company"
              )}
            </div>
            <div>
              {phase === "three show" ? (
                <b>3 Fill Report Details</b>
              ) : (
                "3 Fill Report Details"
              )}
            </div>
          </div>
          <div className="create-reports-info">
            <p>{phase !== "one show" ? "Candidate:" : " "} </p>
            <h3>{phase !== "one show" ? dino.namecreate : " "}</h3>
            <p>{phase === "three show" ? "Company name:" : " "}</p>
            <h3>{phase === "three show" ? dino.companyname : " "}</h3>
          </div>
        </div>
        <div className="create-reports-phases">
          <PhaseOne phase={phase} setPhase={setPhase}></PhaseOne>
          <PhaseTwo phase={phase} setPhase={setPhase}></PhaseTwo>
          <PhaseThree phase={phase} setPhase={setPhase}></PhaseThree>
        </div>
      </div>
    </div>
  );
}

export default CreateReport;
