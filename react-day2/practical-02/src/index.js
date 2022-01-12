import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App";
import "./index.css";

// rendering App component
ReactDOM.render(
	<StrictMode>
		<App />
	</StrictMode>,
	document.getElementById("root")
);
