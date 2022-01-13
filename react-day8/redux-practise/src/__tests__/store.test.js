import { DECREMENT, INCREMENT } from "../store/counter.actions";
import { reducer } from "../store/counter.reducer";

test("should render count 0", () => {
  let state = reducer(undefined, {});
  console.log(state);
  expect(state).toEqual({ count: 0 });
});

test("should increment the count on clicking +", () => {
  let state;
  state = reducer({ count: 3 }, { type: INCREMENT });
  expect(state).toEqual({ count: 4 });
  state = reducer(state, { type: DECREMENT });
  state = reducer(state, { type: DECREMENT });
  expect(state).toEqual({ count: 2 });
  console.log(state);
});
