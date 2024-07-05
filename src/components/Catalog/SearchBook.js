// src/components/Catalog/SearchBook.js
import React, { useState } from 'react';

function SearchBook({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search books"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBook;
