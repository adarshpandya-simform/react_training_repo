import { useState } from "react";
import PaypalComponent from "./components/PaypalComponent";
import "./App.css";

// App component
const App = () => {
  // state for enabling/disabling payment with paypal button
  const [isDisabled, setIsDisabled] = useState(true);

  return (
    <div>
      {/* rendering Item Card */}
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
      {/* conditionally rendering PaypalComponent */}
      <div>{!isDisabled && <PaypalComponent />}</div>
    </div>
  );
};

export default App;
