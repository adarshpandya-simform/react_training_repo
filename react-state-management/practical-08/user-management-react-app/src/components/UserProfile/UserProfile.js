import React, { useEffect } from "react";
import { useUser } from "../../hooks/useUser";
import { Link, useNavigate } from "react-router-dom";
import "./UserProfile.css";

// UserProfile component for rendering User data
const UserProfile = () => {
	// extracting useful parts from custom hook
	const { dispatchResetUserData, getUserData, getUserLoggedInStatus } =
		useUser();
	// useNavigate for navigating
	const navigate = useNavigate();

	// helper function for logout button click
	const handleResetUser = () => {
		// dispatching action and redirecting
		dispatchResetUserData();
		navigate("/signup");
	};

	// checking if user is logged in or not and
	// redirecting back to /signup
	useEffect(() => {
		if (!getUserLoggedInStatus) {
			navigate("/signup");
		}
	}, []);

	return (
		<div className="user-profile-container">
			<div className="user-header">
				<h3>User Data</h3>
				<button onClick={handleResetUser} className="btn btn-danger logout-btn">
					logout
				</button>
			</div>
			<hr />
			{/*conditionally rendering user data */}
			{getUserData !== null &&
				getUserData !== undefined &&
				getUserLoggedInStatus === true && (
					<div className="user-data-card">
						<div className="user-profile-img">
							{/* rendering user image */}
							<img
								className="user-img"
								src={getUserData.profile}
								alt="user-avatar"
							/>
						</div>
						<div className="user-info">
							{/* rendering information */}
							<span>
								Name: <b>{getUserData.name}</b>
							</span>
							<br />
							<span>
								Email: <b>{getUserData.email}</b>
							</span>
							<br />
							<span>
								Contact: <b>{getUserData.contact}</b>
							</span>
							<br />
							<span>
								Password : <b>{getUserData.password}</b>
							</span>
							<br />
						</div>
					</div>
				)}
			<hr />
			{/* link to test whether it goes to signup page or not */}
			<Link to={"/signup"}>Signup</Link>
		</div>
	);
};

export default UserProfile;
