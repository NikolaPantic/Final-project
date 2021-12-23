import React, { useContext } from "react";
import "./phasethree.css";
import { Phasecontext } from '../../Pages/CreateReport/CreateReport.jsx'



function PhaseOne() {
  const phasecontext = useContext(Phasecontext)

  return (
    <div className={phasecontext.phase === 'three show' ? 'three show' : 'three hide'}>
      <div className="phase-three-select-info">
        <div className="interview-date field">
          <p>Interview date</p>
          <input type="date" required />
        </div>
        <div className="phase field">
          <p>Phase</p>
          <select name="phase" className="select-phase " required>
            <option value="CV">CV</option>
            <option value="HR">HR</option>
            <option value="Technical">Technical</option>
            <option value="Final">Final</option>
          </select>
        </div>
        <div className="status field">
          <p>Status</p>
          <select name="status" className="select-status " required>
            <option value="">Select</option>
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
          required
        ></textarea>
      </div>
      <div className="phase-three-buttons">
        <button onClick={() => phasecontext.setPhase('two show')}>BACK</button>
        <button>SUBMIT</button>
      </div>
    </div>
  );
}

export default PhaseOne;
