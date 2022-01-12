import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const initialState = { todos: [] };

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: v4(),
        title: action.payload.title,
        completed: false,
      });
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id === action.payload.id);
    },
    checkTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.completed = action.payload.completed;
        }
        return todo;
      });
    },
  },
});

export const { addTodo, deleteTodo, checkTodo } = todoSlice.actions;
export default todoSlice.reducer;
