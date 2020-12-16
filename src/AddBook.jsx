import React, { useState, useContext } from 'react';
import { BookContext } from './BookContext';

const AddBook = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [books, setBooks] = useContext(BookContext);

  const updateName = e => {
    setName(e.target.value);
  };

  const updatePrice = e => {
    setPrice(e.target.value);
  };

  const addBook = e => {
    e.preventDefault();
    setBooks(prevBooks => [...prevBooks, { title: name, id: books.length + 1 }]);
  };

  return (
    <form onSubmit={addBook}>
      <input type='text' name='name' value={name} onChange={updateName} />
      <input type='text' name='price' value={price} onChange={updatePrice} />
      <button>Submit</button>
    </form>
  );
};

export default AddBook;
