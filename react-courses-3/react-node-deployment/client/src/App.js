import { Link, Route, Routes } from "react-router-dom";
import {
  BoxComponent,
  CustomizedComponent,
  CustomStylesComponent,
  DarkModeButton,
  DarkModeComponent,
  ForcedModeComponents,
} from "./components";
import { Button } from "@chakra-ui/react";
import "./App.css";

const links = [
  { path: "/", name: "Box", component: <BoxComponent /> },
  { path: "/dark-mode", name: "Dark Mode", component: <DarkModeButton /> },
  {
    path: "/dark-mode-component",
    name: "Component Reacting to dark mode",
    component: <DarkModeComponent />,
  },
  {
    path: "/forced-mode-components",
    name: "Component With forced modes",
    component: <ForcedModeComponents />,
  },
  {
    path: "/custom-styled-components",
    name: "Custom Styled components",
    component: <CustomStylesComponent />,
  },
  {
    path: "/customized-component",
    name: "Custom Style Override Component",
    component: <CustomizedComponent />,
  },
];

const App = () => {
  return (
    <div className="app-container">
      <div className="links">
        {links.map((link) => (
          <Link key={link.path} to={link.path}>
            <Button variant={"link"}>{link.name}</Button>
          </Link>
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
