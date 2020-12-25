import React, { useContext } from 'react';
import { BookContext } from './Old.BookContext';

const Header = () => {
  const [books, setBooks] = useContext(BookContext);
  return (
    <header>
      <h1>The Wildly Inaccurate Book List</h1>
      <ul>
        <li>Current Books: {books.length}</li>
        <li>About</li>
        <li>Fork Me</li>
      </ul>
    </header>
  );
};

export default Header;
