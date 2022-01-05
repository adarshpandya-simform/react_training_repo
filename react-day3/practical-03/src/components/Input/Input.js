import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Input.css";

// Input component which accepts addTodo function from parent component
const Input = ({ addTodo }) => {
	const [toggleInput, setToggleInput] = useState(false);
	const [todo, setTodo] = useState("");
	const [error, setError] = useState(false);

	// a function which toggles the state for button/input
	const toggleHandler = () => {
		setToggleInput((prevToggle) => !prevToggle);
	};

	// a function which gets called when 'Enter' and 'Escape' key is pressed
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
			{/* conditional rendering */}
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
					{/* conditional rendering for error */}
					{error && (
						<p className="todo-input-error-msg">
							Please add something in input box before adding
						</p>
					)}
				</div>
			)}
			{/* conditional rendering for button */}
			{!toggleInput && (
				<button onClick={toggleHandler} className="todo-app-add-button">
					+
				</button>
			)}
		</div>
	);
};

// defining propTypes for Input component
Input.propTypes = { addTodo: PropTypes.func };

export default Input;
