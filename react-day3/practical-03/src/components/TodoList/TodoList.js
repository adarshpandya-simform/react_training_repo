import React from "react";
import PropTypes from "prop-types";
import "./TodoList.css";

// TodoList component which accepts 'todos' as prop
const TodoList = ({ todos }) => {
	return (
		<div className="todo-app-list">
			{/* render a msg if no todos */}
			{todos.length === 0 && (
				<p className="empty-msg">
					yay!! all tasks are completed! start adding new tasks
				</p>
			)}
			{/* map through todos and display them */}
			{todos.map((todo) => (
				<div key={todo} className="todo-display">
					<p>{todo}</p>
				</div>
			))}
		</div>
	);
};

// defining propTypes for TodoList
TodoList.propTypes = { todos: PropTypes.array };

export default TodoList;
