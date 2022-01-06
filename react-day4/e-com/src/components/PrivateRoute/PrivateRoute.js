import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const key = localStorage.getItem("key");
  const location = useLocation();

  if (isLoggedIn !== "" && key !== "") {
    if (isLoggedIn === "true" && key === "1232") {
      return children;
    } else {
      return <Navigate to={"/login"} />;
    }
  } else {
    return <Navigate to={"/login"} state={location} />;
  }
};

export default PrivateRoute;
