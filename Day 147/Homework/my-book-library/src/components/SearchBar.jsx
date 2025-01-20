import React from 'react';

const SearchBar = ({ setSearchTerm, searchBooks }) => {
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for books..."
      />
      <button onClick={searchBooks}>Search</button>
    </div>
  );
};

export default SearchBar;
