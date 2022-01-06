import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
      <h4>E-Commerce home</h4>
      <Link to={"/products"}>go to view products</Link>
      <br />
      <Link to={"/login"}>login here</Link>
    </div>
  );
};

export default HomePage;
