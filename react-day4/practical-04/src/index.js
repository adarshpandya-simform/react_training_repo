import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { TodoProvider } from "./context/todo.context";
import "./index.css";

const root = document.getElementById("root");

ReactDOM.render(
	<StrictMode>
		<TodoProvider>
			<App />
		</TodoProvider>
	</StrictMode>,
	root
);
