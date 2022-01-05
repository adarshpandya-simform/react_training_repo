import { useContext } from "react";
import { TodosContext } from "./context/todo.context";
import "./App.css";
import Inputtodo from "./components/InputTodo/Inputtodo";
import DisplayTodo from "./components/DisplayTodo/DisplayTodo";

function App() {
  const { state, dispatch } = useContext(TodosContext);

  console.log(state.todos);
  return (
    <div>
      <p>a todo app with global context</p>
      <Inputtodo />
      <DisplayTodo />
    </div>
  );
}

export default App;
