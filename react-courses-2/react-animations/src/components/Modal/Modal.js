import React from "react";
import "./Modal.css";

const Modal = ({ onClose }) => {
  return (
    <div className="modal-container">
      <div className="modal">
        <h5>Alert</h5>
        <button onClick={onClose}>close </button>
      </div>
    </div>
  );
};

export default Modal;
