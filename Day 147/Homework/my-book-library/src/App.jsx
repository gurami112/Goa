import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import Library from './components/Library';

const App = () => {
  const [books, setBooks] = useState([]);
  const [library, setLibrary] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchBooks = async () => {
    if (searchTerm.trim() === '') return;
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`);
    const data = await response.json();
    setBooks(data.items || []);
  };

  useEffect(() => {
    const savedLibrary = JSON.parse(localStorage.getItem('library')) || [];
    setLibrary(savedLibrary);
  }, []);

  useEffect(() => {
    localStorage.setItem('library', JSON.stringify(library));
  }, [library]);

  return (
    <div>
      <h1>Book Library</h1>
      <SearchBar setSearchTerm={setSearchTerm} searchBooks={searchBooks} />
      <BookList books={books} setLibrary={setLibrary} library={library} />
      <Library library={library} setLibrary={setLibrary} />
    </div>
  );
};

export default App;
