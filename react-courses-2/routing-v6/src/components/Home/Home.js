import React from "react";
import { Link } from "react-router-dom";

// Home component with Todos component link link
const Home = () => {
  return (
    <div>
      <p> this is home page</p>
      <Link to={"/todos"}>click here to start with todos</Link>
    </div>
  );
};

export default Home;
