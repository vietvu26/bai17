import {
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE,
  ADD_BOOK_SUCCESS,
  ADD_BOOK_FAILURE,
  UPDATE_BOOK_SUCCESS,
  UPDATE_BOOK_FAILURE,
  DELETE_BOOK_SUCCESS,
  DELETE_BOOK_FAILURE,
} from "../actions/bookActions";

const initialState = {
  books: [],
  loading: false,
  error: null,
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        loading: false,
        books: action.payload,
      };
    case FETCH_BOOKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ADD_BOOK_SUCCESS:
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case ADD_BOOK_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case UPDATE_BOOK_SUCCESS:
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === action.payload.id ? action.payload.book : book
        ),
      };
    case UPDATE_BOOK_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case DELETE_BOOK_SUCCESS:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };
    case DELETE_BOOK_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default bookReducer;