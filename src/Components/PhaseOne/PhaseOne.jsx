import React, { useContext } from "react";
import CardCreate from "../../Components/CardCreate/CardCreate.jsx";
import Search from "../../Components/Search/Search.jsx";
import "./phaseone.css";
import { Dino } from "../../App"


function PhaseOne(props) {

  const dino = useContext(Dino)

 


  return (
    <div className={props.phase ==='one show' ? 'one show' : 'one hide'}>
      <Search></Search>
      <div className="card-create-wrap">
        {dino.candidates.map(e => <CardCreate key={e.id} id={e.id} name={e.name} email={e.email}></CardCreate>)}
      </div>
      <button onClick={() => { dino.namecreate !== '' ? props.setPhase('two show') : props.setPhase('one show') }}>NEXT</button>
    </div>
  );
}

export default PhaseOne;
