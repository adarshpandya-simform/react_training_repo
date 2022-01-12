import React, { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import { reducer } from "./todo.reducer";

// defining initial state
const initialState = { todos: [] };
// creating context for Todos
export const TodoContext = createContext(initialState);

// creating a context component to wrap around App
export const TodoProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<TodoContext.Provider value={{ state, dispatch }}>
			{children}
		</TodoContext.Provider>
	);
};

TodoProvider.propTypes = { children: PropTypes.node };
