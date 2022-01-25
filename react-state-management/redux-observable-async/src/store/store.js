import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { reducer } from "../reducers/todo.reducers";
import { todoEpic } from "../epics/todo.epic";

// create epic middleware
const epicMiddleware = createEpicMiddleware();

// enabling redux devtools automatically
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// creating a store with epic
export default createStore(
  reducer,
  composeEnhancers(applyMiddleware(epicMiddleware))
);

// running Epics through middleware
epicMiddleware.run(todoEpic);
