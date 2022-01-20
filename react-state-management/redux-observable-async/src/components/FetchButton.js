import React from "react";
import { useDispatch } from "react-redux";
import { setLoading } from "../actions/todos.actions";

const FetchButton = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(setLoading(true));
        }}
      >
        load todos
      </button>
    </div>
  );
};

export default FetchButton;
