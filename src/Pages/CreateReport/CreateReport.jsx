import React, { useEffect, useState, createContext } from "react";
import "./createreport.css";
import PhaseOne from "../../Components/PhaseOne/PhaseOne.jsx";
import PhaseTwo from "../../Components/PhaseTwo/PhaseTwo.jsx";
import PhaseThree from "../../Components/PhaseThree/PhaseThree.jsx";
import Header from "../../Components/Header/Header.jsx";
export const Phasecontext = createContext()


function CreateReport() {
  const [phase, setPhase] = useState('one show')
  const [namecreate, setNameCreate] = useState('')
  const [companyname, setCompanyName] = useState('')
  const [idcreate, setIDCreate] = useState(null)
  const [companyID, setCompanyID] = useState(null)





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
            <p>{phase !== 'one show' ? 'Candidate:' : ''} </p>
            <h3>{phase !== "one show" ? namecreate : ''}</h3>
            <p>{phase === "three show" ? 'Company name:' : ''}</p>
            <h3>{phase === "three show" ? companyname : ''}</h3>
          </div>
        </div>
        <div className="create-reports-phases">
          <Phasecontext.Provider value={{ phase, setIDCreate, setCompanyID, setPhase, setNameCreate, namecreate, setCompanyName, companyname }}>
            <PhaseOne ></PhaseOne>
            <PhaseTwo></PhaseTwo>
            <PhaseThree></PhaseThree>
          </Phasecontext.Provider>
        </div>
      </div>
    </div>
  );
}

export default CreateReport;
