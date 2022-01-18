import "./App.css";

function App() {
  return (
    <div>
      {/* accessing the env mode */}
      <p>this is {process.env.NODE_ENV} mode</p>
      {/* accessing the env vars based on environment */}
      <p>here's the secret msg: {process.env.REACT_APP_SECRET_MSG} </p>
    </div>
  );
}

export default App;
