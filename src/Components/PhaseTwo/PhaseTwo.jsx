import React, { useContext } from "react";
import "./phasetwo.css";
import Search from "../../Components/Search/Search.jsx";
import { Phasecontext } from '../../Pages/CreateReport/CreateReport.jsx'



function PhaseTwo() {
  const phasecontext = useContext(Phasecontext)
  return (
    <div className={phasecontext.phase === 'two show' ? 'two show' : 'two hide'}>
      <Search></Search>
      <div className="company-lists">
        <h3 className="company-name">BIT</h3>
        <h3 className="company-name">BIT</h3>
        <h3 className="company-name">BIT</h3>
        <h3 className="company-name">BIT</h3>
        <h3 className="company-name">BIT</h3>
      </div>
      <div className="phase-two-buttons">
        <button onClick={() => phasecontext.setPhase('one show')}>BACK</button>
        <button onClick={() => phasecontext.setPhase('three show')}>NEXT</button>
      </div>
    </div>
  );
}

export default PhaseTwo;
