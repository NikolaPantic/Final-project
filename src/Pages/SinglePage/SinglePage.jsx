import React, { useEffect, useState, useContext } from "react";
import "./singlepage.css";
import Header from "../../Components/Header/Header.jsx";
import Modal from "../../Components/Modal/Modal.jsx";
import { Dino } from "../../App";
import { useParams } from "react-router-dom";

function SinglePage() {
  const x = useContext(Dino);
  const [reports, setReports] = useState(x.reports);

  let { id } = useParams();

  let singleCandidate = x.candidates.find((e) => e.id == id);

  useEffect(() => setReports(x.reports), [x.reports]);

  // console.log(reports.filter((e) => e.id === singleCandidate.id));

  return (
    <div className="singlepage">
      <Header></Header>
      <div className="person-image-and-data">
        <div className="person-image"></div>
        <div className="person-data">
          <div className="person-data-field">
            <p>Name:</p>
            <h3>{singleCandidate.name}</h3>
          </div>
          <div className="person-data-field">
            <p>Date of birth:</p>
            <h3>{singleCandidate.birthday}</h3>
          </div>
          <div className="person-data-field">
            <p>Email:</p>
            <h3>{singleCandidate.email}</h3>
          </div>
          <div className="person-data-field">
            <p>Education:</p>
            <h3>{singleCandidate.education}</h3>
          </div>
        </div>
      </div>
      <div className="person-report">
        <h2>Reports</h2>
        <table>
          <tr>
            <th>Company</th>
            <th>Interview Date</th>
            <th>Status</th>
          </tr>
        </table>
      </div>
      <Modal></Modal>
    </div>
  );
}

export default SinglePage;
