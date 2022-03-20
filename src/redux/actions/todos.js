import {
  REQUEST_ADD_TODO,
  REQUEST_DELETE_TODO,
  REQUEST_FETCH_TODO,
  REQUEST_UPDATE_NAME_TODO,
  REQUEST_UPDATE_STATUS_TODO,
  SUCCESS_FETCH_TODO,
  FAIL_FETCH_TODO,
  SUCCESS_ADD_TODO,
  FAIL_ADD_TODO,
  SUCCESS_DELETE_TODO,
  SUCCESS_UPDATE_NAME_TODO,
  FAIL_UPDATE_NAME_TODO,
  SUCCESS_UPDATE_STATUS_TODO,
  FAIL_UPDATE_STATUS_TODO,
} from "../types";

export const fetchTodosActions = () => {
  return {
    type: REQUEST_FETCH_TODO,
  };
};
export const fetchTodosSuccessActions = (todos) => {
  return {
    type: SUCCESS_FETCH_TODO,
    payload: { data: todos },
  };
};
export const fetchTodosFailActions = (error) => {
  return {
    type: FAIL_FETCH_TODO,
    payload: { data: error },
  };
};

export const addTodoActions = (todoName, isCompleted, userName) => {
  return {
    type: REQUEST_ADD_TODO,
    payload: { todoName, isCompleted, userName },
  };
};
export const addTodoSuccessActions = () => {
  return {
    type: SUCCESS_ADD_TODO,
  };
};
export const addTodoFailActions = (error) => {
  return {
    type: FAIL_ADD_TODO,
    payload: { data: error },
  };
};

export const deleteTodoActions = (todoId) => {
  return {
    type: REQUEST_DELETE_TODO,
    payload: { todoId },
  };
};
export const deleteTodoSuccessActions = () => {
  return {
    type: SUCCESS_DELETE_TODO,
  };
};

export const deleteTodoFailActions = (error) => {
  return {
    type: REQUEST_DELETE_TODO,
    payload: { data: error },
  };
};

export const updateNameTodoActions = (todoId, newTodoName) => {
  return {
    type: REQUEST_UPDATE_NAME_TODO,
    payload: { todoId, newTodoName },
  };
};

export const updateNameSuccessTodoActions = () => {
  return {
    type: SUCCESS_UPDATE_NAME_TODO,
  };
};

export const updateNameFailTodoActions = (error) => {
  return {
    type: FAIL_UPDATE_NAME_TODO,
    payload: { data: error },
  };
};

export const updateStatusTodoActions = (todoId, newTodoStatus) => {
  return {
    type: REQUEST_UPDATE_STATUS_TODO,
    payload: { todoId, newTodoStatus },
  };
};

export const updateStatusSuccessTodoActions = () => {
  return {
    type: SUCCESS_UPDATE_STATUS_TODO,
  };
};

export const updateStatusFailTodoActions = (error) => {
  return {
    type: FAIL_UPDATE_STATUS_TODO,
    payload: { data: error },
  };
};
