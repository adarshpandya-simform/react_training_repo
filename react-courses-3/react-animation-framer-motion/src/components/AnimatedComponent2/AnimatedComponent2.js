import { motion } from "framer-motion";

const AnimatedComponent2 = () => {
  return (
    <div>
      <br />
      <motion.h4
        initial={{ opacity: 0, y: -1000 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 2 }}
      >
        this text will come from top
      </motion.h4>
      <motion.h4
        initial={{ opacity: 0, y: +1000 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 2 }}
      >
        this text will come from bottom
      </motion.h4>
      <motion.h4
        initial={{ opacity: 0, x: -1000 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 2 }}
      >
        this text will come from left
      </motion.h4>
      <motion.h4
        initial={{ opacity: 0, x: +1000 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 2 }}
      >
        this text will come from right
      </motion.h4>
    </div>
  );
};

export default AnimatedComponent2;
