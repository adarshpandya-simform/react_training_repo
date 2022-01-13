import { createStore } from "redux";
import { reducer } from "./counter.reducer";

// creating store for counter
export const store = createStore(reducer);
