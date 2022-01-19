const StyleAttributeApproach = ({ isActive, setActive }) => {
  return (
    <div>
      <button
        onClick={() => {
          setActive((prevState) => !prevState);
        }}
        className="button"
        style={
          isActive
            ? {
                background: "rgb(31, 133, 0)",
              }
            : {}
        }
      >
        {isActive ? "deactivate" : "activate"}
      </button>
    </div>
  );
};

export default StyleAttributeApproach;
