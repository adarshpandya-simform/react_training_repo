import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose }) => {
  return (
    <div
      className={`modal-container ${
        isOpen ? "modal-container-open" : "modal-container-close"
      }`}
    >
      <div className={`modal ${isOpen ? "modal-open" : "modal-close"}`}>
        <h5>Alert</h5>
        <button onClick={onClose}>close </button>
      </div>
    </div>
  );
};

export default Modal;
