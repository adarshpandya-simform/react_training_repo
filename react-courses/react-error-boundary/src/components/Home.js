import React from "react";
import { Link } from "react-router-dom";

// Home component with link to counter
const Home = () => {
  return (
    <div>
      {/* link to counter */}
      <Link to="/counter">go to counter</Link>
    </div>
  );
};

export default Home;
