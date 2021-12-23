import React, { useContext } from "react";
import "./modal.css";
import { Dino } from '../../App'

function Modal() {


  const info = useContext(Dino)
  return (
    <div className={info.modal ? "modal modal-show" : "modal modal-hide"}>
      <div className="modal-heading">
        <h1></h1>
        <button onClick={() => info.setModal(false)}>x</button>
      </div>
      <div className="modal-body">
        <div className="modal-data">
          <div>
            <p>Company</p>
            <h3></h3>
          </div>
          <div>
            <p>Interview Date</p>
            <h3></h3>
          </div>
          <div>
            <p>Phase</p>
            <h3></h3>
          </div>
          <div>
            <p>Status</p>
            <h3></h3>
          </div>
        </div>
        <div className="modal-notes">
          <p>Notes</p>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
