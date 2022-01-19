import styles from "./StyleModulesApproach.module.css";

const StyleModulesApproach = ({ isActive, setActive }) => {
  return (
    <div>
      <button
        onClick={() => {
          setActive((prevState) => !prevState);
        }}
        className={
          isActive ? `${styles.active} ${styles.button}` : styles.button
        }
      >
        {isActive ? "deactivate" : "activate"}
      </button>
    </div>
  );
};

export default StyleModulesApproach;
