import { motion } from "framer-motion";
import "./AnimatedComponent1.css";

// AnimatedComponent1 for showing animated component
const AnimatedComponent1 = () => {
	return (
		<motion.div
			animate={{ x: 25, y: 25 }}
			transition={{ delay: 1, type: "spring", stiffness: 500 }}
			className="animate-container"
		>
			<p>animated div</p>
		</motion.div>
	);
};

export default AnimatedComponent1;
