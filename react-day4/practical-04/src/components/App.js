import React from "react";
import "./App.css";
import Header from "./Header/Header";
import TodoList from "./TodoList/TodoList";
import AddTodo from "./AddTodo/AddTodo";

const App = () => {
	return (
		<div className="todo-app-container">
			<div className="todo-main-app-container">
				<Header />
				<TodoList />
				<AddTodo />
			</div>
		</div>
	);
};

export default App;
