import React, { useEffect } from "react";
import { SignupForm, WorkingWoman } from "../../components";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";

// Signup Component
const SignupPage = () => {
	// using useNavigate()
	const navigate = useNavigate();
	// getting login status
	const { getUserLoggedInStatus } = useUser();

	// redirecting to '/home' route if user is logged in
	// on component mount
	useEffect(() => {
		if (getUserLoggedInStatus) {
			navigate("/home");
		}
	}, []);

	return (
		<div className="page-container">
			{/* rendering SignupForm and WorkingWoman component */}
			<SignupForm />
			<WorkingWoman />
		</div>
	);
};

export default SignupPage;
