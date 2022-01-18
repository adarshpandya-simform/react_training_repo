import "./TraditionalApproach.css";

const TraditionalApproach = ({ isActive, setActive }) => {
  return (
    <div>
      <button
        onClick={() => {
          setActive((prevState) => !prevState);
        }}
        className={`button ${isActive ? "active" : ""}`}
      >
        {isActive ? "deactivate" : "activate"}
      </button>
    </div>
  );
};

export default TraditionalApproach;
