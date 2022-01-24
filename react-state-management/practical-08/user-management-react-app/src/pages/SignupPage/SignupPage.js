import React, { useEffect } from "react";
import "./SignupPage.css";
import { SignupForm, WorkingWoman } from "../../components";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";

const SignupPage = () => {
	const navigate = useNavigate();
	const { getUserLoggedInStatus } = useUser();

	useEffect(() => {
		if (getUserLoggedInStatus) {
			navigate("/home");
		}
	}, []);

	return (
		<div className="signup-page-container">
			<SignupForm />
			<WorkingWoman />
		</div>
	);
};

export default SignupPage;
