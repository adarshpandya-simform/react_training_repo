import InputTodo from "./components/InputTodo/InputTodo";
import DisplayTodo from "./components/DisplayTodo/DisplayTodo";
import { Routes, Route, Link } from "react-router-dom";
import CompletedTodos from "./components/CompletedTodos/CompletedTodos";
import IncompleteTodos from "./components/IncompleteTodos/IncompleteTodos";
import "./App.css";

const App = () => {
  return (
    <div>
      <p>a todo app with global context and react router dom</p> <br />
      <br />
      {/* Link component from react-router-dom*/}
      {/* works same as <a> tag but for react */}
      <Link to={"/"}>home</Link> <br />
      <Link to={"/add-todo"}>add todo</Link> <br />
      <Link to={"/show-all-todo"}>show all todos</Link> <br />
      <Link to={"/completed-todo"}>show only completed todos</Link> <br />
      <Link to={"/incompleted-todo"}>show only incompleted todos</Link>
      {/* <Routes> work like a wrapper around all the Route component */}
      <Routes>
        {/* Route with path and different components */}
        {/* i.e going on 'add-todo' will give you adding input functionality */}
        <Route path="/" element={<p>you are at home page</p>} />
        <Route path="/add-todo" element={<InputTodo />} />
        <Route path="/show-all-todo" element={<DisplayTodo />} />
        <Route path="/completed-todo" element={<CompletedTodos />} />
        <Route path="/incompleted-todo" element={<IncompleteTodos />} />
      </Routes>
    </div>
  );
};

export default App;
