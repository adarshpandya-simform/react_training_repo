import { createSlice } from "@reduxjs/toolkit";

// initial state for userData
const initialState = {
	userData: {
		name: "",
		profile: null,
		email: "",
		contact: "",
		password: "",
	},
	isLoggedIn: false,
};

// a slice with initial state and reducers
const userSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		// actions
		resetUserData: (state) => {
			state.userData = {
				name: "",
				profile: null,
				email: "",
				contact: "",
				password: "",
			};
			state.isLoggedIn = false;
		},
		setUserData: (state, action) => {
			state.userData = action.payload;
			state.isLoggedIn = true;
		},
	},
});

// exporting actions and reducer
export const { resetUserData, setUserData } = userSlice.actions;
export default userSlice.reducer;
