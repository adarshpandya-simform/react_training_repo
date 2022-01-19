import reducers from "./features/counter/counterSlice";

test("reducers", () => {
  let state;
  state = reducers(undefined, {});
  expect(state).toEqual({ value: 0 });
});

test("should increment the value on clicking +", () => {
  let state;
  state = reducers({ value: 3 }, { type: "counter/increment" });
  expect(state).toEqual({ value: 4 });
  state = reducers(state, { type: "counter/decrement" });
  state = reducers(state, { type: "counter/decrement" });
  expect(state).toEqual({ value: 2 });
});
