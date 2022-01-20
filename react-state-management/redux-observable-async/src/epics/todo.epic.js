import { setTodos, SET_LOADING } from "../actions/todos.actions";
import { delay, from, map, mergeMap } from "rxjs";
import { ofType } from "redux-observable";
import axios from "axios";

// creating an epic stream for todo
export const todoEpic = (action$) => {
  return action$.pipe(
    // trigger on set_loading action
    ofType(SET_LOADING),
    // delay for demo
    delay(1000),
    // async request with response using axios
    mergeMap((action) =>
      from(
        axios.get(`https://jsonplaceholder.typicode.com/users/1/todos`)
      ).pipe(
        map((response) => {
          return setTodos(response.data);
        })
      )
    )
  );
};
