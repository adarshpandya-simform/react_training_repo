import { observer } from "mobx-react";
import "./App.css";
import Counter from "./components/Counter/Counter";

const App = observer(({ counterStore }) => {
  return (
    <div className="App">
      <p>current count : {counterStore.count}</p>
      <Counter counterStore={counterStore} />
    </div>
  );
});

export default App;
