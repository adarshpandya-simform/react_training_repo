import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Modal } from "./components";
import { getDefaultStyle } from "./helpers/getDefaultStyle";
import { getTransitionStyles } from "./helpers/getTransitionsStyles";

export default function App() {
  const [inProp, setInProp] = useState(false);

  return (
    <div className="App">
      <button
        onClick={() => {
          setInProp(true);
        }}
      >
        show transition
      </button>
      <CSSTransition in={inProp} timeout={300}>
        {(state) => (
          <div
            style={{
              ...getDefaultStyle(),
              ...getTransitionStyles()[state],
            }}
          >
            <Modal onClose={() => setInProp(false)} />
          </div>
        )}
      </CSSTransition>
    </div>
  );
}
