import React, { useContext } from "react";
import { CHECK_TODO, DELETE_TODO } from "../../context/todo.actions";
import { TodoContext } from "../../context/todo.context";
import "./TodoList.css";

// TodoList component
const TodoList = () => {
	// accessing state and dispatcher from global state context
	const { state, dispatch } = useContext(TodoContext);

	// handling checkbox toggle
	const handleCheckboxToggle = (e, id) => {
		dispatch({
			type: CHECK_TODO,
			payload: { id, completed: e.target.checked },
		});
	};

	// handling delete todo
	const handleDeleteTodo = (id) => {
		dispatch({ type: DELETE_TODO, payload: { id } });
	};

	return (
		<div className="todo-list-parent">
			{/* conditional rendering for todos */}

			{/* checking if there are no todos */}
			{state.todos.length === 0 && (
				<span className="empty-msg">
					Yayy! No pending Todos Today. Start adding them with + button
				</span>
			)}

			{/* mapping through todos */}
			{state.todos.map(({ id, title, completed }) => (
				<div
					onDoubleClick={() => {
						handleDeleteTodo(id);
					}}
					key={id}
					className="todo-msg-parent"
				>
					<span className={completed ? "todo-msg completed" : "todo-msg"}>
						{title}
					</span>

					{/* custom checkbox */}
					<label className="control control-checkbox">
						<input
							type="checkbox"
							checked={completed}
							onChange={(e) => {
								handleCheckboxToggle(e, id);
							}}
						/>
						<div className="control_indicator"></div>
					</label>
				</div>
			))}
		</div>
	);
};

export default TodoList;
