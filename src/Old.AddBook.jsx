import React, { useState, useContext } from 'react';
import { BookContext } from './Old.BookContext';

const AddBook = () => {
  const [name, setName] = useState('');
  // const [description, setDescription] = useState('');
  const [books, setBooks] = useContext(BookContext);

  const updateName = e => {
    setName(e.target.value);
  };

  // const fetchOpenBook = async name => {
  //   try {
  //     const response = await fetch(`http://openlibrary.org/search.json?q=${name}`, {
  //       method: 'GET',
  //       credentials: 'same-origin',
  //     });
  //     const { openTitle } = await response.json();
  //     console.log(openTitle);
  //   } catch {
  //     (error) {
  //       console.error(error)
  //     }
  //   } finally {
  //     console.log('object');
  //   }
  // };

  const getOLBook = async name => {
    try {
      const response = await fetch(
        `http://openlibrary.org/search.json?q=${name}&jscmd=data&format=json`,
        {
          method: 'GET',
          credentials: 'same-origin',
        }
      );
      var resBooks = await response.json();
      resBooks = resBooks.docs;
      console.log(resBooks);
      const [
        {
          title: resTitle,
          author_name: resAuthor,
          description: resDescription,
          first_publish_year: resYear,
          cover_i: resCover,
        },
      ] = resBooks;
      const resCoverArt = `https://covers.openlibrary.org/b/id/${resCover}.jpg",`;
      console.log(resTitle, resAuthor[0], resYear, resDescription, resCoverArt);
    } catch (error) {
      console.error(error);
    }
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
    getOLBook(name);
  };

  return (
    <>
      <form className='add-book__form' onSubmit={addBook}>
        <label htmlFor='name'>Enter book name</label>
        <input type='text' name='name' value={name} onChange={updateName} />
        <button>Submit</button>
      </form>
    </>
  );
};

export default AddBook;
