import React, { useState, useContext } from 'react';
import { BookContext } from './BookContext';

const Book = props => {
  const [books, setBooks] = useContext(BookContext);

  const removeBook = e => {
    const iddd = e.target.value;
    const newBookList = books.filter(b => b !== books[iddd]);
    setBooks(newBookList);
  };

  return (
    <div className='book'>
      <h3 className='book__title'>{props.title}</h3>
      <img className='book__image' src={props.image} alt={'Book cover'} />
      <p className='book__summary'>{props.summary}</p>
      <button onClick={removeBook} value={props.idx}>
        Delete
      </button>
    </div>
  );
};

export default Book;
