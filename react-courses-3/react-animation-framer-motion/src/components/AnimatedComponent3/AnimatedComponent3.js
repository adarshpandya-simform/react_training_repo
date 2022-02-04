import { motion } from "framer-motion";
import "./AnimatedComponent3.css";

const AnimatedComponent3 = () => {
  return (
    <div>
      <motion.button
        className="btn-primary"
        whileTap={{ scale: 0.95, background: "#2c86c2" }}
        whileHover={{ scale: 1.05, background: "#2c86c2" }}
        whileInView={{ background: "#3aa5ec" }}
        transition={{ type: "spring", stiffness: 800 }}
      >
        Hover or Tap me
      </motion.button>
    </div>
  );
};

export default AnimatedComponent3;
