import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import TodoList from "./TodoList/TodoList";
import Input from "./Input/Input";
import { getDate } from "../helpers/getDate";
import "./App.css";

const App = () => {
	const [todos, setTodos] = useState([]);

	// useEffect to fetch todos on Load
	useEffect(() => {
		let todayDate = localStorage.getItem("date");
		let todosFromFetch = localStorage.getItem("todos");
		if (JSON.parse(todayDate) === getDate()) {
			setTodos(JSON.parse(todosFromFetch));
		} else {
			setTodos([]);
			localStorage.setItem("todos", JSON.stringify(todos));
			localStorage.setItem("date", JSON.stringify(getDate()));
		}
	}, []);

	// useEffect to set todos in localStorage when they change
	useEffect(() => {
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
				<Header />
				<TodoList todos={todos} />
				<Input addTodo={addTodo} />
			</div>
		</div>
	);
};

export default App;
