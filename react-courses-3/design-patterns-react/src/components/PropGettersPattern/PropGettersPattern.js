import Toggle from "./Toggle";
import Switch from "./Switch";

const PropGettersPattern = () => {
  return (
    <Toggle>
      {({ toggle, propGetters }) => (
        <>
          <p>{toggle ? "the switch is on" : "the switch is off"}</p>
          <br />
          <Switch toggle={toggle} {...propGetters()} />
          <br />
          <button
            onClick={
              propGetters({
                onClick: () => {
                  console.log("test");
                },
              }).onClick
            }
          >
            {toggle ? "off" : "on"}
          </button>
        </>
      )}
    </Toggle>
  );
};

export default PropGettersPattern;
