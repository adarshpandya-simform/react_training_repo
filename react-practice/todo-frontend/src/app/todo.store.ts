import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "../features/todoSlice";

// creating and exporting state
export const store = configureStore({
  reducer: {
    todos: reducer,
  },
});

// creating state and dispatch type for TS
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
