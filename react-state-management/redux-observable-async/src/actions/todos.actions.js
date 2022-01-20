export const SET_LOADING = "SET_LOADING";
export const SET_TODOS = "SET_TODOS";

export const setLoading = (payload) => {
  return {
    type: SET_LOADING,
    payload,
  };
};

export const setTodos = (payload) => {
  return {
    type: SET_TODOS,
    payload,
  };
};
