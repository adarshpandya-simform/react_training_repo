// actions
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const CHECK_TODO = "CHECK_TODO";
export const FETCH_TODOS = "FETCH_TODOS";
export const SET_LOADING_STATE = "SET_LOADING_STATE";

// action helpers
export const addTodoAction = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
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

export const setLoadingAction = (loading) => {
  return {
    type: SET_LOADING_STATE,
    payload: loading,
  };
};

export const fetchTodosAction = (todos) => {
  return {
    type: FETCH_TODOS,
    payload: todos,
  };
};
