
import React, { useContext } from "react";


import "./singlereport.css";
import { Dino } from "../../App";

function SingleReport(props) {
  const info = useContext(Dino);

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
      <div className="single-report-narrow-div report-date">
        <h3>
          {new Date(props.e.interviewDate)
            .toLocaleDateString("en-UK")
            .split("/")
            .join(".")}
        </h3>
        <p>Interview date</p>
      </div>
      <div className="single-report-narrow-div">
        <h3>{props.e.status}</h3>
        <p>Status</p>
      </div>
      <div className="single-report-narrow-div single-report-buttons">
        <button
          className="single-report-button"
          onClick={() => {
            info.setModal(true);
            info.setReportInfo(props.e);
          }}
        >
          eye
        </button>
        <button
          className="single-report-button"
          onClick={() => {
            props.showDeleteModal(true);
            info.setReportID(props.e.id);
          }}
        >
          X
        </button>
      </div>
    </div>
  );
}

export default SingleReport;
