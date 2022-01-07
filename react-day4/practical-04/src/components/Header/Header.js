import React from "react";
import { getDate } from "../../helpers/getDate";
import { getDayName } from "../../helpers/getDay";
import "./Header.css";

// Header component
const Header = () => {
	// extracting details from getDate() and getDayName()
	const { day: date, month, year } = getDate();
	const day = getDayName();

	return (
		<div className="header-parent">
			<div className="header-details">
				<div className="header-date">
					<span className="current-date">{date}</span>
				</div>
				<div className="header-month-year">
					<span className="current-month">{month}</span>
					<span className="current-year">{year}</span>
				</div>
			</div>
			<div className="header-day">{day.toUpperCase()}</div>
		</div>
	);
};

export default Header;
