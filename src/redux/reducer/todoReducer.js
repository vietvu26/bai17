import {
    FETCH_TODOS_REQUEST,
    FETCH_TODOS_SUCCESS,
    FETCH_TODOS_FAILURE,
    ADD_TODO_REQUEST,
    ADD_TODO_SUCCESS,
    ADD_TODO_FAILURE,
    UPDATE_TODO_REQUEST,
    UPDATE_TODO_SUCCESS,
    UPDATE_TODO_FAILURE,
    DELETE_TODO_REQUEST,
    DELETE_TODO_SUCCESS,
    DELETE_TODO_FAILURE,
  } from "../actions/todoActions";
  
  const initialState = {
    todos: [],
    loading: false,
    error: null,
  };
  
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_TODOS_REQUEST:
      case ADD_TODO_REQUEST:
      case UPDATE_TODO_REQUEST:
      case DELETE_TODO_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_TODOS_SUCCESS:
        return {
          ...state,
          todos: action.payload,
          loading: false,
          error: null,
        };
      case ADD_TODO_SUCCESS:
        return {
          ...state,
          todos: [...state.todos, action.payload],
          loading: false,
          error: null,
        };
      case UPDATE_TODO_SUCCESS:
        const updatedTodos = state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        );
        return {
          ...state,
          todos: updatedTodos,
          loading: false,
          error: null,
        };
      case DELETE_TODO_SUCCESS:
        const filteredTodos = state.todos.filter(
          (todo) => todo.id !== action.payload.id
        );
        return {
          ...state,
          todos: filteredTodos,
          loading: false,
          error: null,
        };
      case FETCH_TODOS_FAILURE:
      case ADD_TODO_FAILURE:
      case UPDATE_TODO_FAILURE:
      case DELETE_TODO_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default todoReducer;