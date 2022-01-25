import { useDispatch, useSelector } from "react-redux";
import { resetUserData, setUserData } from "../features/user.slice";

// a custom hook for getting global state
// values and dispatching actions
export const useUser = () => {
	// get state
	const state = useSelector((state) => state.users);
	// get dispatcher
	const dispatch = useDispatch();

	// get user logged in status
	const getUserLoggedInStatus = state.isLoggedIn;

	// get user data
	const getUserData = state.userData;

	// dispatch setUserData
	const dispatchSetUserData = (payload) => {
		dispatch(setUserData(payload));
	};

	// dispatch resetUserData
	const dispatchResetUserData = () => {
		dispatch(resetUserData());
	};

	return {
		getUserData,
		getUserLoggedInStatus,
		dispatchResetUserData,
		dispatchSetUserData,
	};
};
