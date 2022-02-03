import NormalSwitch from "./NormalSwitch";

const BasicCompoundPatternProblem = () => {
  const onToggle = () => {
    console.log("basic compound problem toggle method");
  };
  return <NormalSwitch onToggle={onToggle} />;
};

export default BasicCompoundPatternProblem;
