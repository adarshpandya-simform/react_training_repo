import Container from "./components/Container/Container";
import "./App.css";

// App component
function App() {
  return (
    <div className="app-container">
      {/* rendering Container component which contains App*/}
      <Container />
    </div>
  );
}

export default App;
