import Dashboard from "./components/Dashboard/Dashboard";
import EmojiPicker from "./components/EmojiPicker/EmojiPicker";
import Home from "./components/Home/Home";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <br />
      <Link to={"/emoji"}>Emoji Picker</Link>
      <br />
      <Link to={"/dashboard"}>Dashboard</Link>
      <br />
      <Home />
      <EmojiPicker />
      <Dashboard />
    </div>
  );
}

export default App;
