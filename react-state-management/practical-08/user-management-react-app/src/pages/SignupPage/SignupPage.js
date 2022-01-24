import React from "react";
import "./SignupPage.css";
import { SignupForm, WorkingWoman } from "../../components";

const SignupPage = () => {
	return (
		<div className="signup-page-container">
			<SignupForm />
			<WorkingWoman />
		</div>
	);
};

export default SignupPage;
