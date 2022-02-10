import { Link, Route, Routes } from "react-router-dom";
import { Button, Divider } from "@chakra-ui/react";
import { Fragment } from "react";
import { links } from "./utils/data";
import "./App.css";

// App component for rendering all links and routes and components
const App = () => {
  return (
    <div className="app-container">
      {/* rendering all the links */}
      <div className="links">
        {links.map((link) => (
          <Fragment key={link.path}>
            <Link to={link.path}>
              <Button variant={"link"}>{link.name}</Button>
            </Link>
            <Divider />
          </Fragment>
        ))}
      </div>
      {/* rendering all components
          with their respective routes
      */}
      <div className="components">
        <Routes>
          {links.map((link) => (
            <Route key={link.name} path={link.path} element={link.component} />
          ))}
        </Routes>
      </div>
    </div>
  );
};

export default App;
