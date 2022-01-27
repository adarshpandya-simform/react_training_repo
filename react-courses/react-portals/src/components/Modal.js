import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

// Modal component : accepts children and onClick as prop
const Modal = ({ children, onClick }) => {
  // reference to ref the particular modal without creating many modals in dom
  const elRef = useRef(null);

  // checking if modal is already there or not
  if (!elRef.current) {
    const div = document.createElement("div");
    elRef.current = div;
  }

  // effects for component mount
  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);

    // cleanup effects
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  // return a portal with onClick handler, mount component in ref(elRef)
  return createPortal(
    <div className="modal-container" onClick={onClick}>
      <div onClick={(e) => e.stopPropagation()} className="modal">
        {children}
      </div>
    </div>,
    elRef.current
  );
};

export default Modal;
