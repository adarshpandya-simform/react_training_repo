import { Link, Route, Routes } from "react-router-dom";
import { Button, Divider } from "@chakra-ui/react";
import { Fragment } from "react";
import { links } from "./utils/data";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
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
