import { Link, Route, Routes } from "react-router-dom";
import {
  BoxComponent,
  CustomizedComponent,
  CustomStylesComponent,
  DarkModeButton,
  DarkModeComponent,
  ForcedModeComponents,
} from "./components";
import "./App.css";

const App = () => {
  return (
    <div>
      <br />
      <div className="links">
        <Link to={"/"}>Box</Link>
        <Link to={"/dark-mode"}>Dark Mode</Link>
        <Link to={"/dark-mode-component"}>Component Reacting to dark mode</Link>
        <Link to={"/forced-mode-components"}>Component With forced modes</Link>
        <Link to={"/custom-styled-components"}>Custom Styled components</Link>
        <Link to={"/customized-component"}>
          Custom Style Override Component
        </Link>
      </div>
      <br />
      <Routes>
        <Route path="/" element={<BoxComponent />} />
        <Route path="/dark-mode" element={<DarkModeButton />} />
        <Route path="/dark-mode-component" element={<DarkModeComponent />} />
        <Route
          path="/forced-mode-components"
          element={<ForcedModeComponents />}
        />
        <Route
          path="/custom-styled-components"
          element={<CustomStylesComponent />}
        />
        <Route path="/customized-component" element={<CustomizedComponent />} />
      </Routes>
    </div>
  );
};

export default App;
