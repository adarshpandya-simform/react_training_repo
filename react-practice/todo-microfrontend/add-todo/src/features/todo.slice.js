import { createSlice } from "@reduxjs/toolkit";

const initialState = { todos: [] };

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    updateTodo(state, action) {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.completed = action.payload.completed;
        }
        return todo;
      });
    },
  },
});

export const { reducer } = todoSlice;
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
