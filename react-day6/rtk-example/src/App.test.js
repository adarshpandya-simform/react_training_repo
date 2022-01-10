import reducers from "./features/counter/counterSlice";

test("reducers", () => {
  let state;
  state = reducers(undefined, {});
  console.log(state);
  expect(state).toEqual({ value: 0 });
});
