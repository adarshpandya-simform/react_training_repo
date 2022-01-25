import { Link } from "react-router-dom";

// Custom Fallback component for showing error
const FallbackComponent = ({ error, resetErrorBoundary }) => {
  return (
    <>
      {/* rendering error data with msg */}
      <h3>
        An Error Occured, <Link to={"/"}>click here</Link> to go to home
      </h3>
      <pre>Error: {error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </>
  );
};

export default FallbackComponent;
