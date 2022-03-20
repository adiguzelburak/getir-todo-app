import {
  FAIL_ADD_TODO,
  FAIL_DELETE_TODO,
  FAIL_FETCH_TODO,
  FAIL_UPDATE_NAME_TODO,
  FAIL_UPDATE_STATUS_TODO,
  REQUEST_ADD_TODO,
  REQUEST_DELETE_TODO,
  REQUEST_FETCH_TODO,
  REQUEST_UPDATE_NAME_TODO,
  REQUEST_UPDATE_STATUS_TODO,
  SUCCESS_ADD_TODO,
  SUCCESS_DELETE_TODO,
  SUCCESS_FETCH_TODO,
  SUCCESS_UPDATE_NAME_TODO,
  SUCCESS_UPDATE_STATUS_TODO,
} from "../types";

const DefaultState = {
  todos: [],
  error: null,
  isLoading: false,
};

const todosReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case REQUEST_FETCH_TODO:
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    case SUCCESS_FETCH_TODO:
      return {
        ...state,
        todos: action.payload.data,
        error: null,
        isLoading: false,
      };
    case FAIL_FETCH_TODO:
      return {
        ...state,
        error: action.payload.data,
        isLoading: false,
      };
    // add

    case REQUEST_ADD_TODO:
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    case SUCCESS_ADD_TODO:
      return {
        ...state,
        error: null,
        isLoading: false,
      };
    case FAIL_ADD_TODO:
      return {
        ...state,
        error: action.payload.data,
        isLoading: false,
      };

    case REQUEST_DELETE_TODO:
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    case SUCCESS_DELETE_TODO:
      return {
        ...state,
        error: null,
        isLoading: false,
      };
    case FAIL_DELETE_TODO:
      return {
        ...state,
        error: action.payload.data,
        isLoading: false,
      };
    case REQUEST_UPDATE_NAME_TODO:
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    case SUCCESS_UPDATE_NAME_TODO:
      return {
        ...state,
        error: null,
        isLoading: false,
      };
    case FAIL_UPDATE_NAME_TODO:
      return {
        ...state,
        error: action.payload.data,
        isLoading: false,
      };
    case REQUEST_UPDATE_STATUS_TODO:
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    case SUCCESS_UPDATE_STATUS_TODO:
      return {
        ...state,
        error: null,
        isLoading: false,
      };
    case FAIL_UPDATE_STATUS_TODO:
      return {
        ...state,
        error: action.payload.data,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default todosReducer;
