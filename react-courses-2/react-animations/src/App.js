import React, { useState } from "react";
import { Modal } from "./components";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Modal isOpen={isOpen} onClose={handleCloseModal} />
      <button onClick={handleOpenModal}>open modal</button>
    </div>
  );
};

export default App;
