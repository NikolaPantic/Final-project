import React, { useContext } from "react";
import CardCreate from "../../Components/CardCreate/CardCreate.jsx";
import Search from "../../Components/Search/Search.jsx";
import "./phaseone.css";
import { Phasecontext } from '../../Pages/CreateReport/CreateReport.jsx'
import { Dino } from "../../App"


function PhaseOne() {

  const info = useContext(Dino)

  const phasecontext = useContext(Phasecontext)


  return (
    <div className={phasecontext.phase ==='one show' ? 'one show' : 'one hide'}>
      <Search></Search>
      <div className="card-create-wrap">
        {info.candidates.map(e => <CardCreate key={e.id} id={e.id} name={e.name} email={e.email}></CardCreate>)}
      </div>
      <button onClick={() => { phasecontext.namecreate !== '' ? phasecontext.setPhase('two show') : phasecontext.setPhase('one show') }}>NEXT</button>
    </div>
  );
}

export default PhaseOne;
