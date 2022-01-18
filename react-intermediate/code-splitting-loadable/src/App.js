import Home from "./components/Home/Home";
import { Routes, Route, Link } from "react-router-dom";
import loadable from "@loadable/component";
import PuffLoader from "react-spinners/PuffLoader";

const Dashboard = loadable(() => import("./components/Dashboard/Dashboard"), {
  fallback: <PuffLoader loading={true} height={100} color="green" />,
});
const EmojiPicker = loadable(
  () => import("./components/EmojiPicker/EmojiPicker"),
  {
    fallback: <PuffLoader loading={true} height={100} color="green" />,
  }
);

function App() {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <br />
      <Link to={"/emoji"}>Emoji Picker</Link>
      <br />
      <Link to={"/dashboard"}>Dashboard</Link>
      <br />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/emoji" element={<EmojiPicker />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
