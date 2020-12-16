import { React, useState, useContext } from 'react';
import Book from './Book.jsx';
import { BookContext } from './BookContext';

const BookList = () => {
  const [books, setBooks] = useContext(BookContext);
  return (
    <>
      <h1 className='booklist-title'>Book List</h1>
      <div className='booklist'>
        {books.map(book => (
          <Book
            title={book.title}
            image={book.image}
            summary={book.summary}
            id={book.id}
            idx={books.indexOf(book)}
          />
        ))}
      </div>
    </>
  );
};

export default BookList;
