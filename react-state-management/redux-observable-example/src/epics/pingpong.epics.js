import { pingAction, pongAction } from "../actions/pingpong.actions";
import { ofType } from "redux-observable";
import { delay, mapTo } from "rxjs/operators";

// creating an epic for pingpong
export const pingEpic = (action$) =>
  action$.pipe(ofType(pingAction().type), delay(5000), mapTo(pongAction()));
