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
        <p>a simple modal</p>
        <button onClick={onClose}>close modal</button>
      </div>
    </div>
  );
};

export default Modal;
