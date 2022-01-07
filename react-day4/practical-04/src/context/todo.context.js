import React, { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import { reducer } from "./todo.reducer";

const initialState = { todos: [] };
export const TodoContext = createContext(initialState);

export const TodoProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<TodoContext.Provider value={{ state, dispatch }}>
			{children}
		</TodoContext.Provider>
	);
};

TodoProvider.propTypes = { children: PropTypes.node };
