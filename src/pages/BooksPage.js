import React, { useState } from 'react';
import BookForm from '../components/BookForm';
import BookList from '../components/BookList';

function BooksPage() {
  const [books, setBooks] = useState([]);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  return (
    <div className="books-page">
      <h2>Manage Books</h2>
      <BookForm addBook={addBook} />
      <BookList books={books} />
    </div>
  );
}

export default BooksPage;
