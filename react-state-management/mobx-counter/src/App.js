import { observer } from "mobx-react";
import "./App.css";
import Counter from "./components/Counter/Counter";

// App component which uses store to display current
// count and passes it to Counter component
const App = observer(({ counterStore }) => {
  return (
    <div className="App">
      <p>current count : {counterStore.count}</p>
      <Counter counterStore={counterStore} />
    </div>
  );
});

export default App;
