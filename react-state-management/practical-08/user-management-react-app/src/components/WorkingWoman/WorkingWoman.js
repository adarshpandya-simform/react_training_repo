import React from "react";
import WorkingWomanSVG from "../../assets/woman-working.svg";
import "./WorkingWoman.css";

// WorkingWoman component to render the picture in side of form
const WorkingWoman = () => {
	return (
		<div className="asset-container">
			{/* rendering svg */}
			<img src={WorkingWomanSVG} alt="working-woman" />
		</div>
	);
};

export default WorkingWoman;
