import React from "react";
import { motion } from "framer-motion";
import "./AnimatedComponent1.css";

const AnimatedComponent1 = () => {
  return (
    <motion.div
      animate={{ x: 25, y: 25 }}
      transition={{ delay: 2 }}
      className="animate-container"
    >
      <p>animated div</p>
    </motion.div>
  );
};

export default AnimatedComponent1;
