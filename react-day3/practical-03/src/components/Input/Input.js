import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Input.css";

const Input = ({ addTodo }) => {
	const [toggleInput, setToggleInput] = useState(false);
	const [todo, setTodo] = useState("");
	const [error, setError] = useState(false);

	const toggleHandler = () => {
		setToggleInput((prevToggle) => !prevToggle);
	};

	const handleKey = (event) => {
		if (event.key === "Enter") {
			if (todo !== "") {
				addTodo(todo);
				setTodo("");
				setError(false);
			} else {
				setError(true);
			}
		}
		if (event.key === "Escape") {
			toggleHandler();
		}
	};

	return (
		<div className="todo-app-input">
			{toggleInput && (
				<div className="todo-input-container">
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
					{error && (
						<p className="todo-input-error-msg">
							Please add something in input box before adding
						</p>
					)}
				</div>
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
