import Toggle from "./Toggle";
import Switch from "./Switch";

const PropCollectionPattern = () => {
  return (
    <Toggle>
      {({ toggle, getHelperProps }) => (
        <>
          <p>{toggle ? "the switch is on" : "the switch is off"}</p>
          <br />
          <Switch toggle={toggle} {...getHelperProps.getSwitchProps} />
          <br />
          <button {...getHelperProps.getButtonProps}>
            {toggle ? "off" : "on"}
          </button>
        </>
      )}
    </Toggle>
  );
};

export default PropCollectionPattern;
