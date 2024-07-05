import React, { useEffect, useState, useCallback } from 'react';
import BookForm from '../components/BookForm';
import { getBooks, updateBook } from '../services/apiService';

const EditBookPage = ({ match, history }) => {
  const [book, setBook] = useState(null);
  const bookId = match.params.id;

  const fetchBook = useCallback(async () => {
    try {
      const response = await getBooks();
      const book = response.data.find((b) => b._id === bookId);
      setBook(book);
      console.log("Book fetched:", book);
    } catch (error) {
      console.error("Error fetching book:", error);
    }
  }, [bookId]);

  useEffect(() => {
    fetchBook();
  }, [fetchBook]);

  const handleUpdateBook = async (updatedBook) => {
    try {
      await updateBook(bookId, updatedBook);
      history.push('/');
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };

  return (
    <div className="container">
      <h1>Edit Book</h1>
      {book ? (
        <BookForm book={book} onSubmit={handleUpdateBook} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EditBookPage;
