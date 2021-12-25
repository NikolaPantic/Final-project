import React, { useContext, useState } from "react";
import "./reportpage.css";
import Header from "../../Components/Header/Header.jsx";
import Search from "../../Components/Search/Search.jsx";
import SingleReport from "../../Components/SingleReport/SingleReport.jsx";
import Modal from "../../Components/Modal/Modal.jsx";

import { Dino } from "../../App";

function ReportPage() {
  const info = useContext(Dino);
const [reportinfo, setReportInfo]=useState({})
const [deletemodal, showDeleteModal]=useState(false)

  return (
    <div className="report-page">
      <Header></Header>
        <Modal reportinfo={reportinfo}></Modal>

        <div className={deletemodal? "delete-modal": "delete-modal-hide"}>

 <div className="delete-content">

<div>Are you sure you want to delete this report?</div>
<div className="delete-buttons">
<button>YES</button>
<button onClick={()=>showDeleteModal(false)}>NO</button>

</div>

</div>


        </div> 
      <div className="report-page-container">
        <Search></Search>

        {
          info.reports.map(e => <SingleReport showDeleteModal={showDeleteModal} setReportInfo={setReportInfo} e={e}></SingleReport>)
        }

      </div>
    </div>
  );
}

export default ReportPage;
