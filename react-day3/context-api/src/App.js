import { useContext, useEffect } from "react";
import { TodosContext } from "./context/todo.context";
import "./App.css";
import { ADD_TODO } from "./context/todo.action";

function App() {
  const { state, dispatch } = useContext(TodosContext);

  console.log(state.todos);
  return <div>hi</div>;
}

export default App;
