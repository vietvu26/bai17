
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBooks,
  addBook,
  updateBook,
  deleteBook,
} from "../redux/action/bookActions";

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleAddBook = () => {
    const newBook = { title: "New Book" };
    dispatch(addBook(newBook));
  };

  const handleUpdateBook = (id) => {
    const updatedBook = { title: "Updated Book" };
    dispatch(updateBook(id, updatedBook));
  };

  const handleDeleteBook = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <div>
      <h1>Book List</h1>
      <button onClick={handleAddBook}>Add Book</button>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title}
            <button onClick={() => handleUpdateBook(book.id)}>Update</button>
            <button onClick={() => handleDeleteBook(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;