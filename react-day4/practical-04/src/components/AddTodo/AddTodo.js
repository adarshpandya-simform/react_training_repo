import React, { useContext, useState } from "react";
import { ADD_TODO } from "../../context/todo.actions";
import { TodoContext } from "../../context/todo.context";
import "./AddTodo.css";

const AddTodo = () => {
	const [isInputVisible, setIsInputVisible] = useState(false);
	const [todo, setTodo] = useState("");
	const { dispatch } = useContext(TodoContext);

	const handleToggle = () => {
		setIsInputVisible((prevVisibility) => !prevVisibility);
	};

	const handleKeyInput = (e) => {
		if (e.key === "Enter") {
			if (todo !== "") {
				dispatch({ type: ADD_TODO, payload: { title: todo } });
				setTodo("");
			} else {
				alert("please add something before submitting");
			}
		}
		if (e.key === "Escape") {
			handleToggle();
		}
	};

	return (
		<div className="add-todo-parent">
			{isInputVisible && (
				<input
					className="add-todo-input"
					type={"text"}
					placeholder="enter todo"
					onKeyUp={handleKeyInput}
					value={todo}
					onChange={(e) => {
						setTodo(e.target.value);
					}}
					autoFocus
				/>
			)}
			{!isInputVisible && (
				<button onClick={handleToggle} className="add-todo-button">
					+
				</button>
			)}
		</div>
	);
};

export default AddTodo;
