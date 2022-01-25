import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h3>Our Counter App</h3>
      <Link to="/counter"> Click here to go to Counter </Link>
      <br />
      <Link to="/about"> Click here to go to About </Link>
    </div>
  );
};

export default Home;
