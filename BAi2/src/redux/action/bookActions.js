export const FETCH_BOOKS_REQUEST = "FETCH_BOOKS_REQUEST";
export const FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS";
export const FETCH_BOOKS_FAILURE = "FETCH_BOOKS_FAILURE";

export const ADD_BOOK_REQUEST = "ADD_BOOK_REQUEST";
export const ADD_BOOK_SUCCESS = "ADD_BOOK_SUCCESS";
export const ADD_BOOK_FAILURE = "ADD_BOOK_FAILURE";

export const UPDATE_BOOK_REQUEST = "UPDATE_BOOK_REQUEST";
export const UPDATE_BOOK_SUCCESS = "UPDATE_BOOK_SUCCESS";
export const UPDATE_BOOK_FAILURE = "UPDATE_BOOK_FAILURE";

export const DELETE_BOOK_REQUEST = "DELETE_BOOK_REQUEST";
export const DELETE_BOOK_SUCCESS = "DELETE_BOOK_SUCCESS";
export const DELETE_BOOK_FAILURE = "DELETE_BOOK_FAILURE";

export const fetchBooks = () => ({
  type: FETCH_BOOKS_REQUEST,
});

export const addBook = (book) => ({
  type: ADD_BOOK_REQUEST,
  payload: book,
});

export const updateBook = (id, book) => ({
  type: UPDATE_BOOK_REQUEST,
  payload: { id, book },
});

export const deleteBook = (id) => ({
  type: DELETE_BOOK_REQUEST,
  payload: id,
});