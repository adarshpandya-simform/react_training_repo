import React, { useEffect, useMemo, useState } from "react";
import { getDate } from "../../helpers/getDate";
import PropTypes from "prop-types";
import "./Header.css";

// Header component which accepts 'count' as prop
const Header = ({ count }) => {
	const date = useMemo(() => getDate(), [date]);
	const [time, setTime] = useState(new Date());

	// useEffect for time update every second
	useEffect(() => {
		let TimeId = setInterval(() => setTime(new Date()), 1000);
		// clean-up
		return () => {
			clearInterval(TimeId);
		};
	});

	return (
		<div className="todo-app-header">
			<div className="todo-header">
				<span className="header-title">My Todos</span>
				<span className="pending-task">Pending Task : {count}</span>
			</div>
			<div className="date-and-time">
				<span>{date}</span>
				<span>
					{time.toLocaleTimeString().split(":")[0]}:
					{time.toLocaleTimeString().split(":")[1]}{" "}
					{time.toLocaleTimeString().slice(-2)}
				</span>
			</div>
		</div>
	);
};

// defining propTypes for Header
Header.propTypes = { count: PropTypes.number };

export default Header;
