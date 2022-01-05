import React from "react";
import PropTypes from "prop-types";
import "./TodoList.css";

const TodoList = ({ todos }) => {
	return (
		<div className="todo-app-list">
			{todos.length === 0 && (
				<p className="empty-msg">
					yay!! all tasks are completed! start adding new tasks
				</p>
			)}
			{todos.map((todo) => (
				<div key={todo} className="todo-display">
					<p>{todo}</p>
				</div>
			))}
		</div>
	);
};

TodoList.propTypes = { todos: PropTypes.array };

export default TodoList;
