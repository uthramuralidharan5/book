import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TopRatedBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchTopRatedBooks = async () => {
      const response = await axios.get('https://apis.ccbp.in/book-hub/top-rated-books');
      setBooks(response.data);
    };
    fetchTopRatedBooks();
  }, []);

  return (
    <div>
      <h1>Top Rated Books</h1>
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

export default TopRatedBooks;