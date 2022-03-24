import { memo } from "react";

const MemoizedComponentTwo = () => {
  console.log(`Heavy memoized component re rendered`);
  return <div>Assume a heavy component here</div>;
};

export default memo(MemoizedComponentTwo);
