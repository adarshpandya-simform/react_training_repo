import { useState } from "react";
import PaypalComponent from "./components/PaypalComponent";
import "./App.css";

const App = () => {
  const [isDisabled, setIsDisabled] = useState(true);

  return (
    <div>
      <div className="item-card">
        <span className="item-desc">the cool book</span>
        <div className="item-buy-btn">
          <button
            onClick={() => {
              setIsDisabled(false);
            }}
          >
            buy
          </button>
        </div>
      </div>
      <div>{!isDisabled && <PaypalComponent />}</div>
    </div>
  );
};

export default App;
