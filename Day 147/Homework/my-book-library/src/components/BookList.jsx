import React from 'react';

const BookList = ({ books, setLibrary, library }) => {
  const addToLibrary = (book) => {
    const newBook = {
      ...book,
      status: 'unread',
    };
    setLibrary([...library, newBook]);
  };

  return (
    <div>
      <h2>Search Results</h2>
      {books.map((book) => (
        <div key={book.id}>
          <h3>{book.volumeInfo.title}</h3>
          <p>{book.volumeInfo.authors?.join(', ')}</p>
          <p>{book.volumeInfo.description}</p>
          <button onClick={() => addToLibrary(book)}>Add to Library</button>
        </div>
      ))}
    </div>
  );
};

export default BookList;
