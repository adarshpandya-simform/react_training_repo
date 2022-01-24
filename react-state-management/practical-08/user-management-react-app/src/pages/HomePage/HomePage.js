import React from "react";
import { UserProfile } from "../../components/";
import "./HomePage.css";

// HomePage component
const HomePage = () => {
	return (
		<div className="home-page-container">
			{/* rendering HomePage component */}
			<UserProfile />
		</div>
	);
};

export default HomePage;
