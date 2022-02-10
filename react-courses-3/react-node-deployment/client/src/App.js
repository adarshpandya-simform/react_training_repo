import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Link to={"/"}>home</Link>
      <Link to={"/about"}>about</Link>
      <Routes>
        <Route path="/" element={<p>home</p>} />
        <Route path="/about" element={<p>about</p>} />
      </Routes>
    </div>
  );
}

export default App;
