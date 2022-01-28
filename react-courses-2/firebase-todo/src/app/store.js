import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "../features/todoSlice";

// defining a store with todos-reducer
export default configureStore({
  reducer: { todos: reducer },
});
