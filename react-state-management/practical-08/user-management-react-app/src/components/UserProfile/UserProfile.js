import React, { useEffect } from "react";
import { useUser } from "../../hooks/useUser";
import { Link, useNavigate } from "react-router-dom";
import "./UserProfile.css";

const UserProfile = () => {
	const { dispatchResetUserData, getUserData, getUserLoggedInStatus } =
		useUser();
	const navigate = useNavigate();

	const handleResetUser = () => {
		dispatchResetUserData();
		navigate("/signup");
	};

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
			{getUserData !== null &&
				getUserData !== undefined &&
				getUserLoggedInStatus === true && (
					<div className="user-data-card">
						<div className="user-profile-img">
							<img
								className="user-img"
								src={getUserData.profile}
								alt="user-avatar"
							/>
						</div>
						<div className="user-info">
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
			<Link to={"/signup"}>Signup</Link>
		</div>
	);
};

export default UserProfile;
