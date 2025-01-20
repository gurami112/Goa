import React, { useState } from 'react';

const Library = ({ library, setLibrary }) => {
  const [filter, setFilter] = useState('all');

  const toggleStatus = (id) => {
    const updatedLibrary = library.map((book) => {
      if (book.id === id) {
        book.status = book.status === 'unread' ? 'read' : 'unread';
      }
      return book;
    });
    setLibrary(updatedLibrary);
  };

  const filteredBooks = filter === 'all' ? library : library.filter((book) => book.status === filter);

  return (
    <div>
      <h2>Your Book Library</h2>
      <label>Filter by Status:</label>
      <select onChange={(e) => setFilter(e.target.value)} value={filter}>
        <option value="all">All</option>
        <option value="read">Read</option>
        <option value="unread">Unread</option>
      </select>

      <div>
        {filteredBooks.map((book) => (
          <div key={book.id}>
            <h3>{book.title}</h3>
            <p>Status: {book.status}</p>
            <button onClick={() => toggleStatus(book.id)}>
              {book.status === 'unread' ? 'Mark as Read' : 'Mark as Unread'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;
