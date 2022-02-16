import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import "./App.css";

// App component
const App = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);

	return (
		<div className="app-container">
			{/* Routes */}
			<Routes>
				{/* Redirect / to /users */}
				<Route path="/" element={<Navigate to={"/users?page=1"} />} />
				{/* /users route */}
				<Route
					path="/users"
					element={
						<HomePage
							loading={loading}
							data={data}
							setData={setData}
							setLoading={setLoading}
						/>
					}
				/>
			</Routes>
		</div>
	);
};

export default App;
