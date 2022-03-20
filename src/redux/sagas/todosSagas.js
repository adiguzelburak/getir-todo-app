import { call, put, take } from "redux-saga/effects";
import {
  addTodoFailActions,
  addTodoSuccessActions,
  deleteTodoFailActions,
  deleteTodoSuccessActions,
  fetchTodosActions,
  fetchTodosFailActions,
  fetchTodosSuccessActions,
  updateNameFailTodoActions,
  updateNameSuccessTodoActions,
} from "../actions/todos";
import addTodoServices from "../services/addTodoService";
import deleteTodoServices from "../services/deleteTodoService";
import fetchTodosServices from "../services/fetchTodoService";
import updateTodoNameServices from "../services/updateTodoNameService";
import updateTodoStatusServices from "../services/updateTodoStatusService";
import {
  REQUEST_ADD_TODO,
  REQUEST_DELETE_TODO,
  REQUEST_FETCH_TODO,
  REQUEST_UPDATE_NAME_TODO,
  REQUEST_UPDATE_STATUS_TODO,
} from "../types";

export function* fetchTodosSaga() {
  while (true) {
    try {
      yield take(REQUEST_FETCH_TODO);

      const response = yield call(fetchTodosServices);
      const todos = response.docs.map((todo) => ({
        data: todo.data(),
        id: todo.id,
      }));

      yield put(fetchTodosSuccessActions(todos));
    } catch (error) {
      yield put(fetchTodosFailActions(error));
    }
  }
}

export function* addTodoSaga() {
  while (true) {
    try {
      const { payload } = yield take(REQUEST_ADD_TODO);

      yield call(addTodoServices, payload);

      yield put(addTodoSuccessActions());
      yield put(fetchTodosActions());
    } catch (error) {
      yield put(addTodoFailActions(error));
    }
  }
}

export function* deleteTodoSaga() {
  while (true) {
    try {
      const { payload } = yield take(REQUEST_DELETE_TODO);

      yield call(deleteTodoServices, payload.todoId);

      yield put(deleteTodoSuccessActions());
      yield put(fetchTodosActions());
    } catch (error) {
      yield put(deleteTodoFailActions(error));
    }
  }
}

export function* updateTodoNameSaga() {
  while (true) {
    try {
      const { payload } = yield take(REQUEST_UPDATE_NAME_TODO);
      yield call(updateTodoNameServices, payload.todoId, payload.newTodoName);
      yield put(updateNameSuccessTodoActions());
      yield put(fetchTodosActions());
    } catch (error) {
      yield put(updateNameFailTodoActions(error));
    }
  }
}

export function* updateTodoStatusSaga() {
  while (true) {
    try {
      const { payload } = yield take(REQUEST_UPDATE_STATUS_TODO);
      yield call(
        updateTodoStatusServices,
        payload.todoId,
        payload.newTodoStatus
      );
      yield put(updateNameSuccessTodoActions());
      yield put(fetchTodosActions());
    } catch (error) {
      yield put(updateNameFailTodoActions(error));
    }
  }
}
