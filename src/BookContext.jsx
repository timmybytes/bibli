import React, { useState, createContext } from 'react';

export const BookContext = createContext();

export const BookProvider = props => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: 'Neuromancer',
      image: 'https://picsum.photos/200',
      summary: 'Book one is about the things and.',
      price: '',
    },
    {
      id: 2,
      title: 'A Really Great Other Book',
      image: 'https://picsum.photos/200',
      summary: "You won't even believe how much we bury the lede on how great this book is.",
      price: '',
    },
    {
      id: 3,
      title: 'Good Book 3: Fan Service',
      image: 'https://picsum.photos/200',
      summary: 'The plot is recycled, but you knew that when you picked it up.',
      price: '',
    },
    {
      id: 4,
      title: 'Game of Groans',
      image: 'https://picsum.photos/200',
      summary: 'The plot is the same, but you knew that when you picked it up.',
      price: '',
    },
    {
      id: 5,
      title: 'Pet Seminary',
      image: 'https://picsum.photos/200',
      summary: 'Zoomies for the lord.',
      price: '',
    },
  ]);
  return <BookContext.Provider value={[books, setBooks]}>{props.children}</BookContext.Provider>;
};
