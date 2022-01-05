import React, { useState } from "react";
import "./Input.css";

const Input = () => {
	const [toggleInput, setToggleInput] = useState(false);
	const [todo, setTodo] = useState("");

	const toggleHandler = () => {
		setToggleInput((prevToggle) => !prevToggle);
	};

	const handleKey = (event) => {
		if (event.key === "Enter") {
			//logic to add todo in localStorage
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

export default Input;
