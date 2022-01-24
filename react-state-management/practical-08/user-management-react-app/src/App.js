import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage, SignupPage } from "./pages";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<SignupPage />} />
			<Route path="/home" element={<HomePage />} />
			<Route path="/signup" element={<SignupPage />} />
		</Routes>
	);
};

export default App;
