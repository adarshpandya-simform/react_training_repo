import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";

const root = document.getElementById("root");

ReactDOM.render(
	<StrictMode>
		<App />
	</StrictMode>,
	root
);
