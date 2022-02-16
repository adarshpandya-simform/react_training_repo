import { configureStore } from "@reduxjs/toolkit";
import todoReduer from "../features/todo.slice";

// creating and exporting store containing todoReducer
export const store = configureStore({
  reducer: { todos: todoReduer },
});
