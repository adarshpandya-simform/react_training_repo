// exporting logger middleware

export const logger = (store) => (next) => (action) => {
  console.log("logger");
  console.log("===================");
  console.log(store);
  console.log(next);
  console.log(action);
  console.log("===================");
  console.log("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  return result;
};
