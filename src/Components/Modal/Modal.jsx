import React, { useContext } from "react";
import "./modal.css";

function Modal() {
  return (
    <div className="modal">
      <div className="modal-heading">
        <h1></h1>
        <button>x</button>
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
