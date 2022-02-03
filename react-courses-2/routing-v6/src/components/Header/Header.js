import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

// Header component with necessary links
const Header = () => {
  return (
    <div className="todo-header">
      <div className="logo">
        <Link to={"/"}>
          <h4 className="logo-text">Todos</h4>
        </Link>
      </div>
      <div className="menu">
        {/* rendering links */}
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/todos"}>Todos</Link>
      </div>
    </div>
  );
};

export default Header;
