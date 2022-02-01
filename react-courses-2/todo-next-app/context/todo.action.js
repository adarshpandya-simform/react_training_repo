// exporting helper actions
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const CHECK_TODO = "CHECK_TODO";

// helper functions
export const addTodoAction = (title) => {
  return {
    type: ADD_TODO,
    payload: title,
  };
};

export const deleteTodoAction = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export const checkTodoAction = (id, completed) => {
  return {
    type: CHECK_TODO,
    payload: { id, completed },
  };
};
