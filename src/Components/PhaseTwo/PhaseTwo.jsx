import React, { useContext, useEffect, useState } from "react";
import { Phasecontext } from '../../Pages/CreateReport/CreateReport.jsx'
import Search from "../../Components/Search/Search.jsx";
import "./phasetwo.css";



function PhaseTwo() {
  const phasecontext = useContext(Phasecontext)
  const [companies, setCompanies] = useState([])

  useEffect(() => {
    fetch("http://localhost:3333/api/companies")
      .then((res) => res.json())
      .then((res) => setCompanies(res));
  }, []);


  return (
    <div className={phasecontext.phase === 'two show' ? 'two show' : 'two hide'}>
      <Search></Search>
      <div className="company-lists">

        {companies.map(e => <h3 className="company-name" key ={e.id} onClick={() => {
          phasecontext.setCompanyName(e.name)
          phasecontext.setCompanyID(e.id)
        }}>{e.name}</h3>)}


      </div>
      <div className="phase-two-buttons">
        <button onClick={() => phasecontext.setPhase('one show')}>BACK</button>
        <button onClick={() => phasecontext.companyname !== '' ? phasecontext.setPhase('three show') : phasecontext.setPhase('two show')}

        >NEXT</button>
      </div>
    </div>
  );
}

export default PhaseTwo;
