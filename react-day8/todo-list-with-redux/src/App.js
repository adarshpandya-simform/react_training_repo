import "./App.css";
import DisplayTodo from "./components/DisplayTodo/DisplayTodo";
import InputTodo from "./components/InputTodo/InputTodo";

function App() {
  return (
    <div className="todo-app-container">
      <InputTodo />
      <DisplayTodo />
    </div>
  );
}

export default App;
