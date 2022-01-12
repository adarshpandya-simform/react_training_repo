import { connect } from "react-redux";
import { DECREMENT, INCREMENT } from "../store/counter-actions";

const CounterUsingConnect = ({ counter, counterInc, counterDec }) => {
  const handleIncrement = () => {
    counterInc();
  };

  const handleDecrement = () => {
    if (counter !== 0) {
      counterDec();
    }
  };

  return (
    <div>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  counter: state.counter,
});

const mapDispatcherToProps = (dispatch) => ({
  counterInc: () => dispatch({ type: INCREMENT }),
  counterDec: () => dispatch({ type: DECREMENT }),
});

export default connect(
  mapStateToProps,
  mapDispatcherToProps
)(CounterUsingConnect);
