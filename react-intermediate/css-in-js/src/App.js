import { useState } from "react";
import TraditionalApproach from "./components/TraditionalApproach/TraditionalApproach";
import "./App.css";
import StyleAttributeApproach from "./components/StyleAttributeApproach/StyleAttributeApproach";
import StyleModulesApproach from "./components/StyleModulesApproach/StyleModulesApproach";
import ClsxApproach from "./components/ClsxApproach/ClsxApproach";

// CSS in JS with different approaches
function App() {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [active5, setActive5] = useState(false);
  const [active6, setActive6] = useState(false);
  const [active7, setActive7] = useState(false);
  return (
    <div className="App">
      <TraditionalApproach isActive={active1} setActive={setActive1} />
      <StyleAttributeApproach isActive={active2} setActive={setActive2} />
      <StyleModulesApproach isActive={active3} setActive={setActive3} />
      <ClsxApproach isActive={active4} setActive={setActive4} />
    </div>
  );
}

export default App;
