import { motion } from "framer-motion";
import "./AnimatedModal.css";

// Modal container variants
const modalContainerVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
	},
};

// Modal variants
const modalVariants = {
	hidden: {
		scale: 0,
	},
	visible: {
		scale: 1,
	},
};

// AnimatedModal component for showing Animated modal with backdrop
const AnimatedModal = ({ setShowModal }) => {
	return (
		<motion.div
			variants={modalContainerVariants}
			initial="hidden"
			animate="visible"
			exit="hidden"
			className="modal-container"
		>
			<motion.div
				drag
				variants={modalVariants}
				transition={{ type: "spring", stiffness: 200 }}
				className="modal"
			>
				<h3>Lorem Ipsum Title</h3>
				<p className="text-justify">
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book. It has survived not only
					five centuries, but also the leap into electronic typesetting,
					remaining essentially unchanged. It was popularised in the 1960s with
					the release of Letraset sheets containing Lorem Ipsum passages, and
					more recently with desktop publishing software like Aldus PageMaker
					including versions of Lorem Ipsum.
				</p>
				<button onClick={() => setShowModal(false)}>close</button>
			</motion.div>
		</motion.div>
	);
};

export default AnimatedModal;
