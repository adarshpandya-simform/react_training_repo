import { Link } from "react-router-dom";
import "./Header.css";

// Header component
const Header = () => {
  return (
    <div className="header-container">
      <div className="links-container">
        <Link to={"/"}>Home</Link>
        <Link to={"/todos"}>Todos</Link>
        <Link to={"/add-todo"}>Add Todo</Link>
      </div>
    </div>
  );
};

export default Header;
