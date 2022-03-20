import { fork, all } from "redux-saga/effects";
import {
  addTodoSaga,
  deleteTodoSaga,
  fetchTodosSaga,
  updateTodoNameSaga,
  updateTodoStatusSaga,
} from "./todosSagas";

export default function* root() {
  yield all([
    fork(fetchTodosSaga),
    fork(addTodoSaga),
    fork(deleteTodoSaga),
    fork(updateTodoNameSaga),
    fork(updateTodoStatusSaga),
  ]);
}
