import { Route, Navigate } from "react-router-dom";

const PrivateRoute = (props) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const key = localStorage.getItem("key");
  if (JSON.parse(isLoggedIn) === "true" && JSON.parse(key) === "1232") {
    return <Route {...props} />;
  } else {
    return <Navigate to={"/login"} />;
  }
};

export default PrivateRoute;
