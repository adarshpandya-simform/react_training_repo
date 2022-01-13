import { applyMiddleware, createStore } from "redux";
import { reducer } from "./counter.reducer";
import { logger } from "../middlewares/logger";
import { crashReporter } from "../middlewares/crashReport";

// creating store for counter
export const store = createStore(
  reducer,
  applyMiddleware(logger, crashReporter)
);

// subscribed to state updates
console.log(
  store.subscribe(() => {
    console.log(store.getState());
  })
);
