import Home from "./components/Home/Home";
import { Routes, Route, Link } from "react-router-dom";
import { lazy, Suspense } from "react";
import PuffLoader from "react-spinners/PuffLoader";

const Dashboard = lazy(() => import("./components/Dashboard/Dashboard"));
const EmojiPicker = lazy(() => import("./components/EmojiPicker/EmojiPicker"));

function App() {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <br />
      <Link to={"/emoji"}>Emoji Picker</Link>
      <br />
      <Link to={"/dashboard"}>Dashboard</Link>
      <br />
      <Suspense
        fallback={<PuffLoader color={"#262626"} loading={true} size={100} />}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/emoji" element={<EmojiPicker />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
