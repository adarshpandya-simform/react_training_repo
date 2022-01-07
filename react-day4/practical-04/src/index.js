import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { TodoProvider } from "./context/todo.context";
import "./index.css";

const root = document.getElementById("root");

// importing and wrapping the global context around
// <App/> component
ReactDOM.render(
	<StrictMode>
		<TodoProvider>
			<App />
		</TodoProvider>
	</StrictMode>,
	root
);
