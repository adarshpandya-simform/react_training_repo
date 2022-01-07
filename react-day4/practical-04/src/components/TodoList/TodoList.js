import React, { useContext } from "react";
import { CHECK_TODO, DELETE_TODO } from "../../context/todo.actions";
import { TodoContext } from "../../context/todo.context";
import "./TodoList.css";

const TodoList = () => {
	const { state, dispatch } = useContext(TodoContext);

	const handleCheckboxToggle = (e, id) => {
		dispatch({
			type: CHECK_TODO,
			payload: { id, completed: e.target.checked },
		});
	};

	const handleDeleteTodo = (id) => {
		dispatch({ type: DELETE_TODO, payload: { id } });
	};

	return (
		<div className="todo-list-parent">
			{state.todos.length === 0 && (
				<span className="empty-msg">
					Yayy! No pending Todos Today. Start adding them with + button
				</span>
			)}
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
