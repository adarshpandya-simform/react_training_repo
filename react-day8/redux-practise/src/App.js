import "./App.css";
import Counter from "./components/Counter/Counter";
import EmptyComponent from "./components/EmptyComponent/EmptyComponent";
import Header from "./components/Header/Header";
import Todos from "./components/Todos/Todos";

// App component
function App() {
  return (
    <div>
      <Header />
      <Counter />
      <EmptyComponent />
      <Todos />
    </div>
  );
}

export default App;
