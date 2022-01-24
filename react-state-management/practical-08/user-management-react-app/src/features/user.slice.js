import { createSlice } from "@reduxjs/toolkit";

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

const userSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
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

export const { resetUserData, setUserData } = userSlice.actions;
export default userSlice.reducer;
