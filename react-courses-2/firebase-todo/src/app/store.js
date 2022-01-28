import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "../features/todoSlice";

export default configureStore({
  reducer: { todos: reducer },
});
