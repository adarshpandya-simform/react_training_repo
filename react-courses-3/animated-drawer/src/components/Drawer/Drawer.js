import { motion } from "framer-motion";
import "./Drawer.css";

const drawerVariants = {
  hidden: {
    x: -200,
    opacity: 0,
    borderRadius: "70%",
  },
  visible: {
    x: 0,
    opacity: 1,
    borderRadius: 0,
  },
};

const Drawer = ({ setIsOpen }) => {
  return (
    <motion.div
      variants={drawerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="menu-drawer"
    >
      <button
        onClick={() => {
          setIsOpen(false);
        }}
      >
        close
      </button>
      <br />
      <h3>Option 1</h3>
      <h3>Option 2</h3>
      <h3>Option 3</h3>
      <h3>Option 4</h3>
      <h3>Option 5</h3>
      <h3>Option 6</h3>
      <h3>Option 7</h3>
      <h3>Option 8</h3>
      <h3>Option 9</h3>
      <h3>Option 10</h3>
      <h3>Option 11</h3>
      <h3>Option 12</h3>
      <h3>Option 13</h3>
      <h3>Option 14</h3>
      <h3>Option 15</h3>
      <h3>Option 16</h3>
      <h3>Option 17</h3>
      <h3>Option 18</h3>
    </motion.div>
  );
};

export default Drawer;
