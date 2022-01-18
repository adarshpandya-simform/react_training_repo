import "./App.css";

function App() {
  return (
    <div>
      <p>this is {process.env.NODE_ENV} mode</p>
      <p>here's the secret msg: {process.env.REACT_APP_SECRET_MSG} </p>
    </div>
  );
}

export default App;
