import "./AnimatedComponent4.css";
import { motion } from "framer-motion";
import { useState } from "react";

// Switch variants
const outerSwitchVariants = {
	on: {
		background: "rgb(15, 247, 15)",
	},
	off: {
		background: "rgb(189, 187, 187)",
	},
};

const innerSwitchVariants = {
	on: {
		x: 30,
	},
	off: {
		x: 0,
	},
};

// AnimatedComponent4 for showing animated switch with variants
const AnimatedComponent4 = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<div>
			<br />
			<motion.div
				variants={outerSwitchVariants}
				animate={toggle ? "on" : "off"}
				className="outer-switch"
			>
				<motion.div
					onClick={() => setToggle((prevToggle) => !prevToggle)}
					className="inner-switch"
					variants={innerSwitchVariants}
					animate={toggle ? "on" : "off"}
				></motion.div>
			</motion.div>
		</div>
	);
};

export default AnimatedComponent4;
