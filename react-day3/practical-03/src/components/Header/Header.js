import React, { useEffect, useMemo, useState } from "react";
import { getDate } from "../../helpers/getDate";
import PropTypes from "prop-types";
import "./Header.css";

const Header = ({ count }) => {
	const date = useMemo(() => getDate(), [date]);
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		let TimeId = setInterval(() => setTime(new Date()), 1000);
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
					{time.toLocaleTimeString().slice(0, 4)}{" "}
					{time.toLocaleTimeString().slice(-2)}
				</span>
			</div>
		</div>
	);
};

Header.propTypes = { count: PropTypes.number };

export default Header;
