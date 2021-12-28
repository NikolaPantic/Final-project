import React, { useContext } from "react";
import Header from "../../Components/Header/Header.jsx";
import Modal from "../../Components/Modal/Modal.jsx";
import "./singlepage.css";
import { Dino } from "../../App";

function SinglePage() {
  const x = useContext(Dino);

  let singleCandidate = x.candidates.find((e) => e.id === x.singleperson);

  return (
    <div className="singlepage">
      <Header></Header>
      <div className="single-page-container">
        <div className="person-image-and-data">
          <div className="person-image-div">
            <img className="person-image" src={singleCandidate.avatar} alt="" />
          </div>
          <div className="person-data">
            <div className="person-data-field">
              <p className="single-person-heading">Name:</p>
              <h2 className="single-person-data">{singleCandidate.name}</h2>
            </div>
            <div className="person-data-field">
              <p className="single-person-heading">Date of birth:</p>
              <h2 className="single-person-data">
                {new Date(singleCandidate.birthday)
                  .toLocaleDateString("en-UK")
                  .split("/")
                  .join(".")}
              </h2>
            </div>
            <div className="person-data-field">
              <p className="single-person-heading">Email:</p>
              <h2 className="single-person-data">
                {singleCandidate.email.toLowerCase()}
              </h2>
            </div>
            <div className="person-data-field">
              <p className="single-person-heading">Education:</p>
              <h2 className="single-person-data">
                {singleCandidate.education}
              </h2>
            </div>
          </div>
        </div>
        <div className="person-report">
          <h1>Reports</h1>
          {x.singlecandidatereports[0] === undefined ? (
            <div className="alert-message">There are no reports yet</div>
          ) : (
            <table>
              <tr>
                <th
                  onClick={() => {
                    x.singlecandidatereports.sort();
                  }}
                >
                  Company
                </th>
                <th
                  onClick={() => {
                    x.singlecandidatereports.sort();
                  }}
                >
                  Interview Date
                </th>
                <th
                  onClick={() => {
                    x.singlecandidatereports.sort();
                  }}
                >
                  Status
                </th>
              </tr>

              {x.singlecandidatereports.map((e) => (
                <tr>
                  <td className="company-names">{e.companyName}</td>
                  <td className="interview-dates">
                    {new Date(e.interviewDate)
                      .toLocaleDateString("en-UK")
                      .split("/")
                      .join(".")}
                  </td>
                  <td className="statuses">
                    {e.status}
                    <button>eye</button>
                  </td>
                </tr>
              ))}
            </table>
          )}
        </div>
      </div>
      <Modal></Modal>
    </div>
  );
}

export default SinglePage;
