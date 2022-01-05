import React from "react";
import "./App.css";
import Header from "./Header/Header";
import TodoList from "./TodoList/TodoList";
import Input from "./Input/Input";

const App = () => {
	return (
		<div className="app-container">
			<div className="app-title">Todo App</div>
			<div className="todo-parent">
				<Header />
				<TodoList />
				<Input />
			</div>
		</div>
	);
};

export default App;
