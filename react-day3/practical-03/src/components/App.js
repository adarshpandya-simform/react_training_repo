import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import TodoList from "./TodoList/TodoList";
import Input from "./Input/Input";
import { getDate } from "../helpers/getDate";
import "./App.css";

// App component
const App = () => {
	const [todos, setTodos] = useState([]);

	// useEffect to fetch todos on Load (componentDidMount)
	useEffect(() => {
		let todayDate = localStorage.getItem("date");
		let todosFromFetch = localStorage.getItem("todos");
		// check if the date fetched is today's date
		if (JSON.parse(todayDate) === getDate()) {
			// fetch todos from localStorage
			setTodos(JSON.parse(todosFromFetch));
		} else {
			setTodos([]);
			localStorage.setItem("todos", JSON.stringify(todos));
			localStorage.setItem("date", JSON.stringify(getDate()));
		}
	}, []);

	// useEffect to set todos in localStorage when they change
	useEffect(() => {
		// set item in localStorage every time todo updates
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	// add todo function
	const addTodo = (todo) => {
		setTodos((prevTodos) => [...prevTodos, todo]);
	};

	return (
		<div className="app-container">
			<div className="app-title">Todo App</div>
			<div className="todo-parent">
				<Header count={todos.length} />
				<TodoList todos={todos} />
				<Input addTodo={addTodo} />
			</div>
		</div>
	);
};

export default App;
