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

  const gbook = fetch('https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699')
    .then(res => res.json())
    .then(
      ({
        items: [
          {
            volumeInfo: { title, description },
          },
        ],
      }) => {
        // console.log(title);
      }
    );

  return (
    <BookProvider>
      <div>
        <Header></Header>
        <button onClick={handleClick} value='titleChange'>
          Click
        </button>
        <AddBook />
        <BookList />
      </div>
    </BookProvider>
  );
};

export default App;
