import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import TodoReducer from "./reducers/todosReducer";
import sagaRoot from "./sagas";

const reducers = combineReducers({
  todosList: TodoReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(logger, sagaMiddleware));

sagaMiddleware.run(sagaRoot);

export default store;
