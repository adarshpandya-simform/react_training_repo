import { AnimatePresence } from "framer-motion";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { About, Contact, Home } from "./components";

const App = () => {
	const location = useLocation();
	return (
		<>
			<div>
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/contact">Contact</Link>
			</div>
			<AnimatePresence exitBeforeEnter>
				<Routes location={location} key={location.key}>
					<Route path="/" element={<Home />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</AnimatePresence>
		</>
	);
};

export default App;
