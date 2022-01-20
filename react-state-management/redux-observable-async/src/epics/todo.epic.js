import { setTodos, SET_LOADING } from "../actions/todos.actions";
import { delay, from, map, mergeMap } from "rxjs";
import { ofType } from "redux-observable";
import axios from "axios";

// creating an epic for pingpong
export const todoEpic = (action$) => {
  return action$.pipe(
    ofType(SET_LOADING),
    delay(1000),
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
