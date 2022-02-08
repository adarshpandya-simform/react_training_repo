import { motion } from "framer-motion";
import "./MenuButton.css";

const lineVariants = {
  firstLineOpen: {
    rotate: 50,
    y: 7,
  },
  lastLineOpen: {
    rotate: -50,
    y: -7,
  },
  close: {
    rotate: 0,
    y: 0,
  },
  centerLineOpen: {
    opacity: 0,
  },
  centerLineClose: {
    opacity: 1,
  },
};

const MenuButton = ({ isOpen, setIsOpen }) => {
  return (
    <motion.div
      onClick={() => {
        setIsOpen((prevOpen) => !prevOpen);
      }}
      whileTap={{ scale: 1.05 }}
      whileInView={{ scale: 1 }}
      className="menu-btn"
    >
      <div className="menu-btn-lines">
        <motion.div
          variants={lineVariants}
          animate={isOpen ? "firstLineOpen" : "close"}
          className="menu-btn-line"
        ></motion.div>
        <motion.div
          variants={lineVariants}
          animate={isOpen ? "centerLineOpen" : "centerLineClose"}
          className="menu-btn-line"
        ></motion.div>
        <motion.div
          variants={lineVariants}
          animate={isOpen ? "lastLineOpen" : "close"}
          className="menu-btn-line"
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default MenuButton;
