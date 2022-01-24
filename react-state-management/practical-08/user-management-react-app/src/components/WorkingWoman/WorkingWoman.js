import React from "react";
import WorkingWomanSVG from "../../assets/woman-working.svg";
import "./WorkingWoman.css";

const WorkingWoman = () => {
	return (
		<div className="asset-container">
			<img src={WorkingWomanSVG} alt="working-woman" />
		</div>
	);
};

export default WorkingWoman;
