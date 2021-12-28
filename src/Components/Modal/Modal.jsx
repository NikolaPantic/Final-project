import React, { useContext } from "react";
import "./modal.css";
import { Dino } from '../../App'

function Modal() {


  const info = useContext(Dino)
  return (
    <div className={info.modal? "modal modal-show" : "modal modal-hide"}>
     <div className="modal-content">
      <div className="modal-heading">
        <h2>{info.reportinfo.candidateName}</h2>
        <button onClick={() => info.setModal(false)}>x</button>
      </div>
      <div className="modal-body">
        <div className="modal-data">
          <div>
            <p>Company</p>
            <h3>{info.reportinfo.companyName}</h3>
          </div>
          <div>
            <p>Interview Date</p>
            <h3>{new Date(info.reportinfo.interviewDate).toLocaleDateString('en-UK').split('/').join('.')}</h3>
          </div>
          <div>
            <p>Phase</p>
            <h3>{info.reportinfo.phase}</h3>
          </div>
          <div>
            <p>Status</p>
            <h3>{info.reportinfo.status}</h3>
          </div>
        </div>
        <div className="modal-notes">
          <div>Notes</div>
          <div>{info.reportinfo.note}</div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Modal;
