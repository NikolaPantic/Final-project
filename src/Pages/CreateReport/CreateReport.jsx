import React, { useEffect } from "react";
import "./createreport.css";
import PhaseOne from "../../Components/PhaseOne/PhaseOne.jsx";
import PhaseTwo from "../../Components/PhaseTwo/PhaseTwo.jsx";
import PhaseThree from "../../Components/PhaseThree/PhaseThree.jsx";
import Header from "../../Components/Header/Header.jsx";

function CreateReport() {
  useEffect(() => {
    fetch("http://localhost:3333/api/companies")
      .then((res) => res.json())
      .then((res) => console.log(res));
  }, []);

  return (
    <div className="create-reports">
      <Header></Header>
      <div className="create-reports-container">
        <div className="create-reports-stages-and-info">
          <div className="create-reports-stages">
            <h3>1 Select Candidate</h3>
            <h3>2 Select Company</h3>
            <h3>3 Fill Report Details</h3>
          </div>
          <div className="create-reports-info">
            <p>Candidate:</p>
            <h3></h3>
            <p>Company:</p>
            <h3></h3>
          </div>
        </div>
        <div className="create-reports-phases">
          <PhaseOne></PhaseOne>
          <PhaseTwo></PhaseTwo>
          <PhaseThree></PhaseThree>
        </div>
      </div>
    </div>
  );
}

export default CreateReport;
