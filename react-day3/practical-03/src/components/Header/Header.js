import React, { useEffect, useMemo, useState } from "react";
import { getDate } from "../../helpers/getDate";
import "./Header.css";

const Header = () => {
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
			<p>My Todos</p>
			<div className="date-and-time">
				<span>{date}</span>
				<span>
					{time.toLocaleTimeString().slice(0, 5)}{" "}
					{time.toLocaleTimeString().slice(-2)}
				</span>
			</div>
		</div>
	);
};

export default Header;
