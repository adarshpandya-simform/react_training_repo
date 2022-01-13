import "./App.css";
import Counter from "./components/Counter/Counter";
import EmptyComponent from "./components/EmptyComponent/EmptyComponent";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Counter />
      <EmptyComponent />
    </div>
  );
}

export default App;
