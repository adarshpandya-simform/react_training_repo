import { useDispatch, useSelector } from "react-redux";
import { DECREMENT, INCREMENT } from "../store/counter-actions";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const handleIncrement = () => {
    dispatch({ type: INCREMENT });
  };
  const handleDecrement = () => {
    if (counter !== 0) {
      dispatch({ type: DECREMENT });
    }
  };
  return (
    <div>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
};

export default Counter;
