import React from "react";
import "./Header.css";

const Header = () => {
	return (
		<div className="todo-app-header">
			<p>My Todos(5)</p>
			<div className="date-and-time">
				<span>Jan 5,2022</span>
				<span>11:48 AM</span>
			</div>
		</div>
	);
};

export default Header;
