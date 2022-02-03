import React from "react";
import BasicCompoundPatternProblem from "./components/BasicCompoundPatternProblem/BasicCompoundPatternProblem";
import BasicCompoundPatternSolution from "./components/BasicCompoundPatternSolution/BasicCompoundPatternSolution";
import FlexibleCompoundPatternSolution from "./components/FlexibleCompoundPatternSolution/FlexibleCompoundPatternSolution";
import RenderPropsPatternProblem from "./components/RenderPropsPatternProblem/RenderPropsPatternProblem";
import RenderPropsPatternSolution from "./components/RenderPropsPatternSolution/RenderPropsPatternSolution";

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
      <br />
      <hr />
      <br />
      <span>
        Flexible Compound Pattern Problem (won't work event if we wrap it in div
        without doing anything [react only passes props to parents - (in our
        case div)])
      </span>
      <BasicCompoundPatternSolution>
        <div>
          <BasicCompoundPatternSolution.Button />
        </div>
        <BasicCompoundPatternSolution.On>
          the switch is on
        </BasicCompoundPatternSolution.On>
        <BasicCompoundPatternSolution.Off>
          the switch is off
        </BasicCompoundPatternSolution.Off>
      </BasicCompoundPatternSolution>
      <br />
      <span>
        Flexible Compound Pattern Solution (more flexible than
        BasicCompoundPatternSolution)
      </span>
      <FlexibleCompoundPatternSolution>
        <div>
          <FlexibleCompoundPatternSolution.Button />
        </div>
        <FlexibleCompoundPatternSolution.On>
          flexible switch on
        </FlexibleCompoundPatternSolution.On>
        <FlexibleCompoundPatternSolution.Off>
          flexible switch off
        </FlexibleCompoundPatternSolution.Off>
      </FlexibleCompoundPatternSolution>
      <br />
      <hr />
      <br />
      <span>Render Props Pattern Problem</span>
      <RenderPropsPatternProblem />
      <br />
      <span>
        Render Props Pattern Solution (props decides which component to render)
      </span>
      <RenderPropsPatternSolution />
      <br />
      <hr />
      <br />
    </div>
  );
};

export default App;
