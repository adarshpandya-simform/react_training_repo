import React from "react";
import { pingAction } from "../actions/pingpong.actions";
import { useSelector, useDispatch } from "react-redux";

// Pingpong component
const PingPong = () => {
  // using useSelector for getting state of pingpong
  const { isPinging } = useSelector((state) => state);
  // getting dispatcher
  const dispatch = useDispatch();

  return (
    <div>
      {/* showing status */}
      <h1>is pinging: {isPinging.toString()}</h1>
      {/* dispatching ping action onClick */}
      <button
        onClick={() => {
          dispatch(pingAction());
        }}
      >
        change state
      </button>
    </div>
  );
};

export default PingPong;
