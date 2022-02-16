import Toggle from "./Toggle";
import Switch from "./Switch";

const RenderPropsPatternSolution = () => {
  return (
    <Toggle>
      {({ toggle, setToggle }) => (
        <>
          <p>{toggle ? "the switch is on" : "the switch is off"}</p>
          <br />
          <Switch toggle={toggle} setToggle={setToggle} />
          <br />
          <button
            onClick={() => {
              setToggle((prevToggle) => !prevToggle);
            }}
          >
            {toggle ? "off" : "on"}
          </button>
        </>
      )}
    </Toggle>
  );
};

export default RenderPropsPatternSolution;
