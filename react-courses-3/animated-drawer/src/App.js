import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import { Backdrop, Drawer, MenuButton } from "./components";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="app-container">
        {/* menu button */}
        <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      {/* backdrop */}
      <AnimatePresence exitBeforeEnter>
        {isOpen && <Backdrop />}
      </AnimatePresence>
      {/* drawer */}
      <AnimatePresence exitBeforeEnter>
        {isOpen && <Drawer setIsOpen={setIsOpen} />}
      </AnimatePresence>
    </>
  );
};

export default App;
