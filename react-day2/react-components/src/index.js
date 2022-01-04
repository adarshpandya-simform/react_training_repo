import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
// import { App } from "./components/App";
import "./index.css";

const App = () => <h1>hi</h1>;

ReactDOM.render(
	<StrictMode>
		<App />
	</StrictMode>,
	document.getElementById("root")
);
