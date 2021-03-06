import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

const root = document.getElementById("root");

ReactDOM.render(
	<StrictMode>
		<App />
	</StrictMode>,
	root
);
