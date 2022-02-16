import "../../Switch.css";

const FlexibleSwitch = ({ toggle, setToggle }) => {
  const onToggleHandler = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  return (
    <div className={`outer-container ${toggle ? "container-active" : ""}`}>
      <div onClick={onToggleHandler} className="inner-switch"></div>
    </div>
  );
};

export default FlexibleSwitch;
