import { ErrorBoundary } from "react-error-boundary";
import FallbackComponent from "./FallbackComponent";

// creating custom error boundary component using 'react-error-boundary'
// accepts children and onReset handler
const ErrorBoundaryComponent = ({ children, onReset }) => {
  return (
    // using FallbackComponent as fallback in error state
    <ErrorBoundary onReset={onReset} FallbackComponent={FallbackComponent}>
      {children}
    </ErrorBoundary>
  );
};

export default ErrorBoundaryComponent;
