import axios from "axios";
import { useState } from "react";

const App = () => {
  const [reactCourse, setReactCourse] = useState(0);
  const [cssCourse, setCssCourse] = useState(0);
  const [error, setError] = useState(false);

  const paymentAcceptHandler = async () => {
    await axios
      .post(
        "http://localhost:2000/checkout",
        {
          items: [
            { id: 1, quantity: reactCourse },
            { id: 2, quantity: cssCourse },
          ],
        },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((res) => {
        if (res.data) {
          if (res.data.success) {
            window.location = res.data.url;
            setError(false);
          } else {
            console.log("error", res.data);
          }
        } else {
          console.log("not successful");
        }
      })
      .catch((error) => {
        setError(true);
      });
  };

  const handleReactCourseIncrement = () => {
    setReactCourse((prevCourse) => prevCourse + 1);
  };

  const handleReactCourseDecrement = () => {
    if (reactCourse !== 0) {
      setReactCourse((prevCourse) => prevCourse - 1);
    }
  };

  const handleCssCourseDecrement = () => {
    if (cssCourse !== 0) {
      setCssCourse((prevCourse) => prevCourse - 1);
    }
  };

  const handleCssCourseIncrement = () => {
    setCssCourse((prevCourse) => prevCourse + 1);
  };

  return (
    <div>
      <code>
        the payment gateway is still in test mode. test it with 4242 4242 4242
        4242 card
      </code>
      <br />
      <button onClick={handleReactCourseIncrement}>+</button>
      <input type={"number"} value={reactCourse} readOnly />
      <button onClick={handleReactCourseDecrement}>-</button>
      <br />
      <button onClick={handleCssCourseIncrement}>+</button>
      <input type={"number"} value={cssCourse} readOnly />
      <button onClick={handleCssCourseDecrement}>-</button>
      <br />
      <br />
      <button onClick={paymentAcceptHandler}>pay using stripe</button>
      <br />
      <br />
      {error && (
        <p>unexpected error occured while paying. try again later...</p>
      )}
    </div>
  );
};

export default App;
