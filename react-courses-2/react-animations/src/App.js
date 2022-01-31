import React, { useState } from "react";
import { Modal } from "./components";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onCloseHandler = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onCloseHandler} />
      <button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        open modal
      </button>
    </div>
  );
};

export default App;
