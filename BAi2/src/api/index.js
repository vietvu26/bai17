import { v4 as uuidv4 } from "uuid";

const books = [
  { id: uuidv4(), title: "Book 1" },
  { id: uuidv4(), title: "Book 2" },
  { id: uuidv4(), title: "Book 3" },
];

export const fetchBooks = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(books);
    }, 500);
  });

export const addBook = (book) =>
  new Promise((resolve) => {
    setTimeout(() => {
      const newBook = { id: uuidv4(), ...book };
      books.push(newBook);
      resolve(newBook);
    }, 500);
  });

export const updateBook = (id, updatedBook) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = books.findIndex((book) => book.id === id);
      if (index !== -1) {
        books[index] = { id, ...updatedBook };
        resolve(books[index]);
      } else {
        reject(new Error("Book not found."));
      }
    }, 500);
  });

export const deleteBook = (id) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = books.findIndex((book) => book.id === id);
      if (index !== -1) {
        books.splice(index, 1);
        resolve();
      } else {
        reject(new Error("Book not found."));
      }
    }, 500);
  });