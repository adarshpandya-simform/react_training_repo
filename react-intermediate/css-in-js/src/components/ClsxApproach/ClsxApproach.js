import clsx from "clsx";

const ClsxApproach = ({ isActive, setActive }) => {
  return (
    <div>
      <button
        onClick={() => {
          setActive((prevState) => !prevState);
        }}
        className={clsx("button", { active: isActive })}
      >
        {isActive ? "deactivate" : "activate"}
      </button>
    </div>
  );
};

export default ClsxApproach;
