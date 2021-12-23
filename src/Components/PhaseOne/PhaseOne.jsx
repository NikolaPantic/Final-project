import React, { useContext } from "react";
import "./phaseone.css";
import CardCreate from "../../Components/CardCreate/CardCreate.jsx";
import Search from "../../Components/Search/Search.jsx";
import { Phasecontext } from '../../Pages/CreateReport/CreateReport.jsx'


function PhaseOne() {
  const phasecontext = useContext(Phasecontext)
  return (
    <div className={phasecontext.phase === 'one show' ? 'one show' : 'one hide'}>
      <Search></Search>
      <div className="card-create-wrap">
        <CardCreate></CardCreate>
      </div>
      <button onClick={() => { phasecontext.setPhase("two show") }}>NEXT</button>
    </div>
  );
}

export default PhaseOne;
