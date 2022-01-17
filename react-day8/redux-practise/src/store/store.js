import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducer as counterReducer } from "./counter.reducer";
import { reducer as todoReducer } from "./todo.reducer";
import { logger } from "../middlewares/logger";
import { crashReporter } from "../middlewares/crashReport";
import thunk from "redux-thunk";

// combining reducers
const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todoReducer,
});

// creating store for counter and todos
export const store = createStore(
  rootReducer,
  applyMiddleware(logger, crashReporter, thunk)
);

// subscribed to state updates
console.log(
  store.subscribe(() => {
    console.log(store.getState());
  })
);
