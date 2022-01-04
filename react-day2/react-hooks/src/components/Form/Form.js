import React, { useRef } from "react";

const Form = () => {
  // useRef hook example
  const inputEl = useRef(null);

  const handleFillForm = () => {
    inputEl.current.value = "this is filled by clicking button";
  };

  const resetForm = () => {
    inputEl.current.value = "";
  };

  return (
    <div>
      <input
        ref={inputEl}
        type="text"
        placeholder="Click on Fill Data button to add data"
      />
      <br />
      <button onClick={handleFillForm}>fill the data in input field</button>
      <br />
      <button onClick={resetForm}>reset the data in input field</button>
    </div>
  );
};

export default Form;
