// src/components/Catalog/EditBook.js
import React, { useState, useEffect } from 'react';

function EditBook({ book, onUpdate, onCancel }) {
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [isbn, setIsbn] = useState(book.isbn);

  useEffect(() => {
    setTitle(book.title);
    setAuthor(book.author);
    setIsbn(book.isbn);
  }, [book]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ ...book, title, author, isbn });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author"
        required
      />
      <input
        type="text"
        value={isbn}
        onChange={(e) => setIsbn(e.target.value)}
        placeholder="ISBN"
        required
      />
      <button type="submit">Update Book</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
}

export default EditBook;
