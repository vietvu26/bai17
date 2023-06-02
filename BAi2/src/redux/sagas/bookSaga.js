import { put, call, takeLatest } from "redux-saga/effects";
import {
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE,
  ADD_BOOK_REQUEST,
  ADD_BOOK_SUCCESS,
  ADD_BOOK_FAILURE,
  UPDATE_BOOK_REQUEST,
  UPDATE_BOOK_SUCCESS,
  UPDATE_BOOK_FAILURE,
  DELETE_BOOK_REQUEST,
  DELETE_BOOK_SUCCESS,
  DELETE_BOOK_FAILURE,
} from "../actions/bookActions";
import * as api from "../../api";

function* fetchBooksSaga() {
  try {
    const books = yield call(api.fetchBooks);
    yield put({ type: FETCH_BOOKS_SUCCESS, payload: books });
  } catch (error) {
    yield put({ type: FETCH_BOOKS_FAILURE, payload: error.message });
  }
}

function* addBookSaga(action) {
  try {
    const book = yield call(api.addBook, action.payload);
    yield put({ type: ADD_BOOK_SUCCESS, payload: book });
  } catch (error) {
    yield put({ type: ADD_BOOK_FAILURE, payload: error.message });
  }
}

function* updateBookSaga(action) {
  try {
    const updatedBook = yield call(
      api.updateBook,
      action.payload.id,
      action.payload.book
    );
    yield put({
      type: UPDATE_BOOK_SUCCESS,
      payload: { id: action.payload.id, book: updatedBook },
    });
  } catch (error) {
    yield put({ type: UPDATE_BOOK_FAILURE, payload: error.message });
  }
}

function* deleteBookSaga(action) {
  try {
    yield call(api.deleteBook, action.payload);
    yield put({ type: DELETE_BOOK_SUCCESS, payload: action.payload });
  } catch (error) {
    yield put({ type: DELETE_BOOK_FAILURE, payload: error.message });
  }
}

function* bookSaga() {
  yield takeLatest(FETCH_BOOKS_REQUEST, fetchBooksSaga);
  yield takeLatest(ADD_BOOK_REQUEST, addBookSaga);
  yield takeLatest(UPDATE_BOOK_REQUEST, updateBookSaga);
  yield takeLatest(DELETE_BOOK_REQUEST, deleteBookSaga);
}

export default bookSaga;