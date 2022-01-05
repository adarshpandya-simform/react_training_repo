import InputTodo from "./components/InputTodo/InputTodo";
import DisplayTodo from "./components/DisplayTodo/DisplayTodo";
import "./App.css";

function App() {
  return (
    <div>
      <p>a todo app with global context</p>
      <InputTodo />
      <DisplayTodo />
    </div>
  );
}

export default App;
