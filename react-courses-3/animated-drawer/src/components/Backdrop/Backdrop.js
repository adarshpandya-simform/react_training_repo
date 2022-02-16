import { motion } from "framer-motion";
import "./Backdrop.css";

const backdropVariants = {
  hidden: {
    background: "transparent",
    opacity: 0,
  },
  visible: {
    background: "rgba(0,0,0,.3)",
    opacity: 1,
  },
};

const Backdrop = () => {
  return (
    <motion.div
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="backdrop"
    ></motion.div>
  );
};

export default Backdrop;
