import React, { useState, useContext } from 'react';
import { BookContext } from './BookContext';

const AddBook = () => {
  const [name, setName] = useState('');
  // const [description, setDescription] = useState('');
  const [books, setBooks] = useContext(BookContext);

  const updateName = e => {
    setName(e.target.value);
  };

  const fetchBook = async name => {
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=title:${name}`, {
        method: 'GET',
        credentials: 'same-origin',
      });
      const {
        items: [{ volumeInfo }],
      } = await response.json();
      const { title } = await volumeInfo;
      let bookSum = await volumeInfo.description;
      bookSum = `${bookSum.substring(0, 150)}...[more]`;
      // setDescription(bookSum);
      const {
        imageLinks: { thumbnail },
      } = await volumeInfo;
      setBooks(prevBooks => [
        ...prevBooks,
        { title: title, id: books.length + 1, summary: bookSum, image: thumbnail },
      ]);
    } catch (error) {
      console.error(error);
    }
  };

  const addBook = e => {
    e.preventDefault();
    fetchBook(name);
  };

  return (
    <form className='add-book__form' onSubmit={addBook}>
      <label htmlFor='name'>Enter book name</label>
      <input type='text' name='name' value={name} onChange={updateName} />
      <button>Submit</button>
    </form>
  );
};

export default AddBook;
