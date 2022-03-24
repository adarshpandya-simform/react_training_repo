import { memo } from "react";

const MemoizedComponent = ({ color }) => {
  console.log("Memoized Component Rerendered");
  return (
    <div
      style={{
        width: 75,
        height: 75,
        background: color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {color} box
    </div>
  );
};

export default memo(MemoizedComponent);
