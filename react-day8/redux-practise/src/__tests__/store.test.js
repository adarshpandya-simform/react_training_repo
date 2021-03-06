import { DECREMENT, INCREMENT } from "../store/counter.actions";
import { reducer } from "../store/counter.reducer";

// initial test
test("should render count 0", () => {
  let state = reducer(undefined, {});
  expect(state).toEqual({ count: 0 });
});

// test for button press count change
test("should change the count when clicked on buttons", () => {
  let state;
  state = reducer({ count: 3 }, { type: INCREMENT });
  expect(state).toEqual({ count: 4 });
  state = reducer(state, { type: DECREMENT });
  state = reducer(state, { type: DECREMENT });
  expect(state).toEqual({ count: 2 });
});
