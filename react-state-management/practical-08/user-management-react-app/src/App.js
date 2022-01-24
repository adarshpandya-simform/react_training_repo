import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage, SignupPage } from "./pages";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigate to={"/signup"} />} />
			<Route path="/home" element={<HomePage />} />
			<Route path="/signup" element={<SignupPage />} />
			<Route path="*" element={<p>404 not found...</p>} />
		</Routes>
	);
};

export default App;
