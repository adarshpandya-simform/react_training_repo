import { Link } from "react-router-dom";

// Header component with all links
const Header = () => {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/todos"}>Todos</Link>
      <Link to={"/add-todo"}>Add Todo</Link>
    </div>
  );
};

export default Header;
