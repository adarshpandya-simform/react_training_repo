import { useEffect } from "react";

// Empty Component just to check re renders of different component
const EmptyComponent = () => {
  useEffect(() => {
    console.log("empty component rendered");
  }, []);
  console.log("in empty component");
  return <div>this is just empty component</div>;
};

export default EmptyComponent;
