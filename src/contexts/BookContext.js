import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: 'name of the wind', author: 'patrick rothfuss', id: 1 },
    { title: 'the finale empire', author: 'brandon sanderson', id: 2 },
  ]);

  // Add Book to the data
  const addBook = (title, author) => {
    setBooks([...books, { title: title, author: author, id: uuid() }]);
  };

  // Remove Book from the data
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div>
      <BookContext.Provider value={{ books, addBook, removeBook }}>
        {props.children}
      </BookContext.Provider>
    </div>
  );
};

export default BookContextProvider;
