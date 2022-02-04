import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import {
	AnimatedComponent1,
	AnimatedComponent2,
	AnimatedComponent3,
	AnimatedComponent4,
	AnimatedComponent5,
	AnimatedModal,
} from "./components";

const App = () => {
	const [showModal, setShowModal] = useState(false);

	const modalHandler = () => {
		setShowModal(true);
	};

	return (
		<>
			<div className="container">
				<AnimatedComponent1 />
				<AnimatedComponent2 />
				<AnimatedComponent3 />
				<AnimatedComponent4 />
				<AnimatedComponent5 />
				<button onClick={modalHandler}>open modal</button>
			</div>
			<AnimatePresence exitBeforeEnter>
				{showModal && <AnimatedModal setShowModal={setShowModal} />}
			</AnimatePresence>
		</>
	);
};

export default App;
