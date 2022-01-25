import React from "react";
import { useDispatch } from "react-redux";
import { setLoading } from "../actions/todos.actions";

// FetchButton to trigger load_data action
const FetchButton = () => {
  // getting dispatch from useDispatch()
  const dispatch = useDispatch();

  return (
    <div>
      {/* firing action on button click */}
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
