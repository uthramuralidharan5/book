// src/components/BookForm.js
import React, { useState } from 'react';

const BookForm = ({ book = {}, onSubmit }) => {
  const [title, setTitle] = useState(book.title || '');
  const [author, setAuthor] = useState(book.author || '');
  const [isbn, setIsbn] = useState(book.isbn || '');
  const [price, setPrice] = useState(book.price || '');
  const [publicationDate, setPublicationDate] = useState(book.publicationDate || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, author, isbn, price, publicationDate });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="author">Author</label>
        <input
          type="text"
          className="form-control"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="isbn">ISBN</label>
        <input
          type="text"
          className="form-control"
          id="isbn"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="price">Price</label>
        <input
          type="number"
          className="form-control"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="publicationDate">Publication Date</label>
        <input
          type="date"
          className="form-control"
          id="publicationDate"
          value={publicationDate}
          onChange={(e) => setPublicationDate(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default BookForm;
