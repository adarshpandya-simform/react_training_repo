import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Input.css";

const Input = ({ addTodo }) => {
	const [toggleInput, setToggleInput] = useState(false);
	const [todo, setTodo] = useState("");

	const toggleHandler = () => {
		setToggleInput((prevToggle) => !prevToggle);
	};

	const handleKey = (event) => {
		if (event.key === "Enter") {
			addTodo(todo);
			setTodo("");
		}
		if (event.key === "Escape") {
			toggleHandler();
		}
	};

	return (
		<div className="todo-app-input">
			{toggleInput && (
				<input
					type="text"
					placeholder="Enter Todo"
					className="todo-app-main-input"
					value={todo}
					onChange={(e) => {
						setTodo(e.target.value);
					}}
					autoFocus
					onKeyUp={handleKey}
				/>
			)}
			{!toggleInput && (
				<button onClick={toggleHandler} className="todo-app-add-button">
					+
				</button>
			)}
		</div>
	);
};

Input.propTypes = { addTodo: PropTypes.func };

export default Input;
