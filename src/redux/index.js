import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import sagaRoot from "./sagas";

const reducers = combineReducers({});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(logger, sagaMiddleware));

sagaMiddleware.run(sagaRoot);

export default store;
