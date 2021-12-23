import React, { useContext } from "react";
import "./singlereport.css";
import { Dino } from '../../App'

function SingleReport(props) {

  const info = useContext(Dino)
  let date = new Date(props.e.interviewDate)

  return (
    <div className="single-report">
      <div className="single-report-wide-div">
        <h3>{props.e.companyName}</h3>
        <p>Company</p>
      </div>
      <div className="single-report-wide-div">
        <h3>{props.e.candidateName}</h3>
        <p>Candidate</p>
      </div>
      <div className="single-report-narrow-div">
        <h3>{date.toLocaleDateString('en-UK').split('/').join('.')}</h3>
        <p>Interview date</p>
      </div>
      <div className="single-report-narrow-div">
        <h3>{props.e.status}</h3>
        <p>Status</p>
      </div>
      <div className="single-report-narrow-div">
        <button onClick={() => info.setModal(true)}>eye</button>
        <button >X</button>
      </div>
    </div>
  );
}

export default SingleReport;
