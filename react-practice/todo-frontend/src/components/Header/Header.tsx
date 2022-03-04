import { FC } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header: FC = (): JSX.Element => {
  return (
    <div className="header">
      <Link to={"/"}>Home</Link>
      <Link to={"/todos"}>Todos</Link>
    </div>
  );
};

export default Header;
