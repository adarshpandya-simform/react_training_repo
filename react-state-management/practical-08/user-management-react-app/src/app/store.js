import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user.slice";

// creating a store with reducer
export const store = configureStore({
	reducer: { users: userReducer },
});
