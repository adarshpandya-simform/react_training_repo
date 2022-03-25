import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "../features/todo.slice";

export const store = configureStore({
  reducer: {
    todos: reducer,
  },
});
