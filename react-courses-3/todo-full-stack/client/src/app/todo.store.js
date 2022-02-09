import { configureStore } from "@reduxjs/toolkit";
import todoReduer from "../features/todo.slice";

export const store = configureStore({
  reducer: { todos: todoReduer },
});
