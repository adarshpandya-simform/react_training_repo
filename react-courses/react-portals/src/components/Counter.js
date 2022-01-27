import React, { useState } from "react";
import Modal from "./Modal";

// Counter component (shows warning modal when count >=10)
const Counter = () => {
  // states
  const [count, setCount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  // helper function for increment
  const handleIncrement = () => {
    if (count >= 10) {
      setShowModal(true);
    } else {
      setCount((prevCount) => prevCount + 1);
    }
  };

  // helper function for decrement
  const handleDecrement = () => {
    if (count >= 10) {
      setShowModal(true);
    } else {
      setCount((prevCount) => prevCount - 1);
    }
  };

  // helper fn for ModalClick
  const handleModalClick = () => {
    setShowModal(false);
  };

  // helper fn for reset button in modal
  const handleResetButton = () => {
    setCount(0);
    setShowModal(false);
  };

  // helper fn for close button in modal
  const handleCloseButotn = () => {
    setShowModal(false);
  };

  return (
    <div>
      <p>count is {count}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      {/* conditionally rendering modal */}
      {showModal && (
        <Modal onClick={handleModalClick}>
          <div>
            <h4>Attention!!!</h4>
            <p>Counter Limit Reached</p>
            <br />
            {/* modal buttons */}
            <div className="modal-buttons">
              <button onClick={handleCloseButotn}>close the warning</button>
              <button onClick={handleResetButton}>reset</button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Counter;
