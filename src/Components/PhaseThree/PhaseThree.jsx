import React, { useContext, useState } from "react";
import "./phasethree.css";
import { Phasecontext } from '../../Pages/CreateReport/CreateReport.jsx'
import {Dino} from '../../App'


function PhaseThree() {
  const dino=useContext(Dino)
  const phasecontext = useContext(Phasecontext)
  let date = new Date()
  let day = date.getDate()
  let month = date.getMonth() + 1
  let year = date.getFullYear()

  date = year + '-' + month + '-' + day


const[message, setMessage]=useState(false)
  const [interviewdate, setInterviewDate]=useState('')
  const [interviewphase, setInterviewPhase]=useState('CV')
  const [status,setStatus]=useState('Select')
const [notes, setNotes]=useState('')


const setNewReport=()=>{

if(interviewdate!=='' && status!=='select' && notes!==''){

fetch('http://localhost:3333/api/reports',{
method:'POST',
headers: { 'Content-Type': 'db/db.json',
Authorization: `Bearer <${dino.token}>` },
body: JSON.stringify({
  candidateId: phasecontext.idcreate,
  candidateName: phasecontext.namecreate,
  companyId: phasecontext.companyID,
  companyName: phasecontext.companyname,
  interviewDate: interviewdate,
  phase: interviewphase,
  status: status,
  note: notes
})


})

}

else setMessage(true)

}


  return (
    <div className={phasecontext.phase === 'three show' ? 'three show' : 'three hide'}>
      <div className="phase-three-select-info">
        <div className="interview-date field">
          <p>Interview date</p>
          <input type="date" required max={date} onChange={(e)=>setInterviewDate(e.target.value)}/>
        </div>
        <div className="phase field">
          <p>Phase</p>
          <select name="phase" className="select-phase " required onChange={(e)=>setInterviewPhase(e.target.value)}>
            <option value="CV">CV</option>
            <option value="HR">HR</option>
            <option value="Technical">Technical</option>
            <option value="Final">Final</option>
          </select>
        </div>
        <div className="status field">
          <p>Status</p>
          <select name="status" className="select-status " required onChange={(e)=>setStatus(e.target.value)}>
            <option value="Select">Select</option>
            <option value="Passed">Passed</option>
            <option value="Declined">Declined</option>
          </select>

       
        </div>
      </div>
      <div className="phase-notes">
        <p>Notes</p>
        <textarea
          name="Notes"
          rows="10"
          className="text-area"
          required onChange={(e)=>setNotes(e.target.value)}
        ></textarea>

        <p className="login-message">{message?'All fields are required!':''}</p>
      </div>
      <div className="phase-three-buttons">
        <button onClick={() => phasecontext.setPhase('two show')}>BACK</button>
        <button onClick={setNewReport}>SUBMIT</button>
      </div>
    </div>
  );
}

export default PhaseThree;
