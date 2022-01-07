import { ADD_TODO, CHECK_TODO, DELETE_TODO } from "./todo.actions";
import { v4 } from "uuid";

export const reducer = (state, action) => {
	switch (action.type) {
		case ADD_TODO:
			return {
				...state,
				todos: [
					...state.todos,
					{ id: v4(), title: action.payload.title, completed: false },
				],
			};
		case CHECK_TODO:
			return {
				...state,
				todos: [
					...state.todos.map((todo) => {
						if (todo.id === action.payload.id) {
							todo.completed = action.payload.completed;
						}
						return todo;
					}),
				],
			};
		case DELETE_TODO:
			return {
				...state,
				todos: [...state.todos.filter((todo) => todo.id !== action.payload.id)],
			};
		default:
			return state;
	}
};
