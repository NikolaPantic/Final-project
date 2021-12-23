import React, { useContext } from "react";
import "./reportpage.css";
import Header from "../../Components/Header/Header.jsx";
import Search from "../../Components/Search/Search.jsx";
import SingleReport from "../../Components/SingleReport/SingleReport.jsx";
import Modal from "../../Components/Modal/Modal.jsx";

import { Dino } from "../../App";

function ReportPage() {
  const info = useContext(Dino);

  return (
    <div className="report-page">
      <Header></Header>
      <div className="report-page-container">

        <Search></Search>
        {
          info.reports.map(e => <SingleReport e={e}></SingleReport>)
        }

        <Modal></Modal>
      </div>
    </div>
  );
}

export default ReportPage;
