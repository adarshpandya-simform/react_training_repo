import { observable, action } from "mobx";

// creating a store with actions (using observable)
export const counterStore = observable({
  count: 0,
  increment: action("inc", () => {
    counterStore.count += 1;
  }),

  decrement: action("dec", () => {
    counterStore.count -= 1;
  }),

  decBy: action("decBy", (num) => {
    counterStore.count -= num;
  }),
});
