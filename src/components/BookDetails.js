import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BookDetails({ match }) {
  const [book, setBook] = useState({});

  useEffect(() => {
    const fetchBook = async () => {
      const response = await axios.get(`https://apis.ccbp.in/book-hub/books/${match.params.bookId}`);
      setBook(response.data);
    };
    fetchBook();
  }, [match.params.bookId]);

  return (
    <div>
      <h1>{book.title}</h1>
      <p>Author: {book.author}</p>
      <img src={book.coverPic} alt={book.title} />
      <p>Rating: {book.rating}</p>
      <p>Read Status: {book.readStatus}</p>
    </div>
  );
}

export default BookDetails;