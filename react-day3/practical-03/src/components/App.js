import React, { useState } from "react";
import "./App.css";

const App = () => {
	const [count, setCount] = useState(0);
	return (
		<div
			className="app-container"
			onClick={() => {
				setCount((c) => c + 1);
			}}
		>
			simple app {count}
		</div>
	);
};

export default App;
