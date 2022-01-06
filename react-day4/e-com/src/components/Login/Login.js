import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (username !== "" && password !== "") {
      if (username === "admin" && password === "1234") {
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("key", "1232");
        navigate("/");
      } else {
        localStorage.setItem("isLoggedIn", "");
        localStorage.setItem("key", "");
        alert("wrong username or password");
      }
    } else {
      alert("please enter username and password");
    }
  };

  return (
    <div>
      <input
        type={"text"}
        value={username}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
        placeholder="enter username"
      />
      <br />
      <input
        type={"password"}
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="enter password"
      />{" "}
      <br />
      <button onClick={handleSubmit}>login</button>
    </div>
  );
};

export default Login;
