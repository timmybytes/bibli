import React, { useState } from 'react';
import BookList from './BookList';
import Book from './Book';
import { BookProvider } from './BookContext';
import Header from './Header';
import AddBook from './AddBook';

const App = () => {
  const [currentBook, setCurrentBook] = useState({ title: 'Title', image: '', summary: 'Summary' });

  const handleClick = e => {
    setCurrentBook({ title: 'New Title', image: 'still nothing...', summary: 'The best' });
  };

  return (
    <BookProvider>
      <div>
        <Header />
        <AddBook />
        <BookList />
      </div>
    </BookProvider>
  );
};

export default App;
