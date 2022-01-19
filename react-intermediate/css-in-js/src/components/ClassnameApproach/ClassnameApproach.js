import classnames from "classnames";

const ClassnameApproach = ({ isActive, setActive }) => {
  return (
    <div>
      <button
        onClick={() => {
          setActive((prevState) => !prevState);
        }}
        className={classnames("button", { active: isActive })}
      >
        {isActive ? "deactivate" : "activate"}
      </button>
    </div>
  );
};

export default ClassnameApproach;
