import React, { useContext, useEffect, useState } from "react";
import Header from "../../Components/Header/Header.jsx";
import Modal from "../../Components/Modal/Modal.jsx";
import "./singlepage.css";
import { Dino } from "../../App";

function SinglePage(props) {
  const x = useContext(Dino);

  const [singleCandidate, setSingleCandidate] = useState("");
  const [candReport, setCandReport] = useState([]);

  useEffect(
    () =>
      setSingleCandidate(
        x.candidates.find((e) => e.id == props.match.params.id)
      ),
    [x.candidates]
  );

  useEffect(() => {
    setCandReport(
      x.reports.filter((e) => e.candidateId == props.match.params.id)
    );
  }, [x.reports]);

  console.log(candReport);

  return (
    <div className="singlepage">
      {singleCandidate && (
        <>
          <Header></Header>
          <div className="single-page-container">
            <div className="person-image-and-data">
              <div className="person-image-div">
                <img
                  className="person-image"
                  src={singleCandidate.avatar}
                  alt=""
                />
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
              {candReport.length === 0 ? (
                <div className="alert-message">There are no reports yet</div>
              ) : (
                <table>
                  <tr>
                    <th
                      onClick={() => {
                        candReport.sort();
                      }}
                    >
                      Company
                    </th>
                    <th
                      onClick={() => {
                        candReport.sort();
                      }}
                    >
                      Interview Date
                    </th>
                    <th
                      onClick={() => {
                        candReport.sort();
                      }}
                    >
                      Status
                    </th>
                  </tr>

                  {candReport?.map((e, i) => (
                    <tr key={i}>
                      <td className="company-names">{e.companyName}</td>
                      <td className="interview-dates">
                        {new Date(e.interviewDate)
                          .toLocaleDateString("en-UK")
                          .split("/")
                          .join(".")}
                      </td>
                      <td className="statuses">
                        {e.status}
                        <button
                          onClick={() => {
                            x.setModal(true);
                            x.setReportInfo(e);
                          }}
                        >
                          eye
                        </button>
                      </td>
                    </tr>
                  ))}
                </table>
              )}
            </div>
          </div>
        </>
      )}
      <Modal></Modal>
    </div>
  );
}

export default SinglePage;
