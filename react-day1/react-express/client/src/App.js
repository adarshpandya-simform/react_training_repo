import "./App.css";

function App() {
  const fetchData = async () => {
    await fetch("http://localhost:2000/")
      .then((res) => res.json())
      .then((data) => {
        alert(data.msg);
      });
  };
  return (
    <div>
      <header>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <br />
        <br />
        <button
          onClick={() => {
            fetchData();
          }}
        >
          fetch data from backend
        </button>
      </header>
    </div>
  );
}

export default App;
