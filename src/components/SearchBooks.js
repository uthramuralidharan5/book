import React, { useState } from 'react';

function SearchBooks() {
  const [searchText, setSearchText] = useState('');
  const [books, setBooks] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();
    const response = await axios.get(`https://apis.ccbp.in/book-hub/books?shelf=all&search=${searchText}`);
    setBooks(response.data);
  };

  return (
    <div>
      <h1>Search Books</h1>
      <form onSubmit={handleSearch}>
        <input
          type="search"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
          placeholder="Search for books"
        />
        <button type="submit">Search</button>
      </form>
      <ul>
      {books.map((book) => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBooks;