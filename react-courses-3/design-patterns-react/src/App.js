import React from "react";
import BasicCompoundPatternProblem from "./components/BasicCompoundPatternProblem/BasicCompoundPatternProblem";
import BasicCompoundPatternSolution from "./components/BasicCompoundPatternSolution/BasicCompoundPatternSolution";

const App = () => {
  return (
    <div>
      <span>Basic Compound Pattern Problem</span>
      <BasicCompoundPatternProblem />
      <br />
      <span>Basic Compound Pattern Solution</span>
      <BasicCompoundPatternSolution>
        <BasicCompoundPatternSolution.On>
          the switch is on
        </BasicCompoundPatternSolution.On>
        <BasicCompoundPatternSolution.Off>
          the switch is off
        </BasicCompoundPatternSolution.Off>
        <BasicCompoundPatternSolution.Button />
      </BasicCompoundPatternSolution>
    </div>
  );
};

export default App;
