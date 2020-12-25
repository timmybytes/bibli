import React, { useState } from 'react';
import { BookProvider } from './Old.BookContext';
import MainGrid from './MainGrid';

const App = () => {
  const [currentBook, setCurrentBook] = useState({ title: 'Title', image: '', summary: 'Summary' });

  const handleClick = e => {
    setCurrentBook({ title: 'New Title', image: 'still nothing...', summary: 'The best' });
  };

  return (
    <BookProvider>
      <>
        <MainGrid />
      </>
    </BookProvider>
  );
};

export default App;
