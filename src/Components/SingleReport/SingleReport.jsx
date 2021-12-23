import React from "react";
import "./singlereport.css";

function SingleReport() {
  return (
    <div className="single-report">
      <div className="single-report-wide-div">
        <h3></h3>
        <p>Company</p>
      </div>
      <div className="single-report-wide-div">
        <h3></h3>
        <p>Candidate</p>
      </div>
      <div className="single-report-narrow-div">
        <h3></h3>
        <p>Interview date</p>
      </div>
      <div className="single-report-narrow-div">
        <h3></h3>
        <p>Status</p>
      </div>
      <div className="single-report-narrow-div">
        <button>eye</button>
        <button>X</button>
      </div>
    </div>
  );
}

export default SingleReport;
