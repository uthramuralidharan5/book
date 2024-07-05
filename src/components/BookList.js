import React, { useEffect, useState } from 'react';
import BookCard from './BookCard';
import { getBooks, deleteBook } from 'C:/Users/Uthra/React/book-hub/src/services/apiService';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const response = await getBooks();
    setBooks(response.data);
  };

  const handleDelete = async (id) => {
    await deleteBook(id);
    fetchBooks();
  };

  return (
    <div className="book-list">
      {books.map((book) => (
        <BookCard key={book._id} book={book} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default BookList;
