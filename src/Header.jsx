import React, { useContext } from 'react';
import { BookContext } from './BookContext';

const Header = () => {
  const [books, setBooks] = useContext(BookContext);
  return (
    <header>
      <ul>
        <li>Current Books: {books.length}</li>
        <li>About</li>
        <li>Fork Me</li>
      </ul>
    </header>
  );
};

export default Header;
