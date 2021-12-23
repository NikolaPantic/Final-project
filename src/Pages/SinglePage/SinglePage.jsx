import React from "react";
import "./singlepage.css";
import Header from "../../Components/Header/Header.jsx";
import Modal from "../../Components/Modal/Modal.jsx";

function SinglePage() {
  return (
    <div className="singlepage">
      <Header></Header>
      <div className="person-image-and-data">
        <div className="person-image"></div>
        <div className="person-data">
          <div className="person-data-field">
            <p>Name:</p>
            <h3></h3>
          </div>
          <div className="person-data-field">
            <p>Date of birth:</p>
            <h3></h3>
          </div>
          <div className="person-data-field">
            <p>Email:</p>
            <h3></h3>
          </div>
          <div className="person-data-field">
            <p>Education:</p>
            <h3></h3>
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
