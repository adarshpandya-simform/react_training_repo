import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import {
	AnimatedComponent1,
	AnimatedComponent2,
	AnimatedComponent3,
	AnimatedComponent4,
	AnimatedComponent5,
	AnimatedModal,
} from "..";

// Route Animation variants
export const RouterAnimations = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: { duration: 1 },
	},
	exit: {
		x: "-100vw",
		transition: { ease: "easeInOut" },
	},
};

// Home component to render all animated components
const Home = () => {
	const [showModal, setShowModal] = useState(false);

	// helper fn for handling modal
	const modalHandler = () => {
		setShowModal(true);
	};

	return (
		<motion.div
			variants={RouterAnimations}
			initial="hidden"
			animate="visible"
			exit="exit"
		>
			<div className="container">
				<AnimatedComponent1 />
				<AnimatedComponent2 />
				<AnimatedComponent3 />
				<AnimatedComponent4 />
				<AnimatedComponent5 />
				<button onClick={modalHandler}>open modal</button>
			</div>
			<AnimatePresence exitBeforeEnter>
				{/* conditionally rendering AnimatedModal */}
				{showModal && <AnimatedModal setShowModal={setShowModal} />}
			</AnimatePresence>
		</motion.div>
	);
};

export default Home;
