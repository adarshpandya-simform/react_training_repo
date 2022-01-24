import { useDispatch, useSelector } from "react-redux";
import { resetUserData, setUserData } from "../features/user.slice";

export const useUser = () => {
	const state = useSelector((state) => state.users);
	const dispatch = useDispatch();

	const getUserLoggedInStatus = state.isLoggedIn;

	const getUserData = state.userData;

	const dispatchSetUserData = (payload) => {
		dispatch(setUserData(payload));
	};

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
