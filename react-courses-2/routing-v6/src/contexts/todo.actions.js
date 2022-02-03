// action values
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const CHECK_TODO = "CHECK_TODO";

// exporting action helpers
export const addTodo = (title) => {
  return {
    type: ADD_TODO,
    payload: title,
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export const checkTodo = (id, completed) => {
  return {
    type: CHECK_TODO,
    payload: { id, completed },
  };
};
