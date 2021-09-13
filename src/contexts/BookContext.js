import React, { createContext, useReducer, useEffect } from 'react';
import { bookReducer } from './reducers/bookreducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem('books');
    return localData ? JSON.parse(localData) : [];
  });

  // Add book to Local Storage
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  return (
    <div>
      <BookContext.Provider value={{ books, dispatch }}>
        {props.children}
      </BookContext.Provider>
    </div>
  );
};

export default BookContextProvider;
