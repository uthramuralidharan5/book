// src/components/Catalog/Catalog.js
import React, { useState, useEffect } from 'react';
import BookList from './BookList';
import AddBook from './AddBook';
import EditBook from './EditBook';
import SearchBook from './SearchBook';

function Catalog() {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const response = await fetch('/api/books');
    const data = await response.json();
    setBooks(data);
  };

  const handleAddBook = async (book) => {
    await fetch('/api/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    });
    fetchBooks();
  };

  const handleUpdateBook = async (book) => {
    await fetch(`/api/books/${book.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    });
    fetchBooks();
    setEditingBook(null);
  };

  const handleDeleteBook = async (id) => {
    await fetch(`/api/books/${id}`, { method: 'DELETE' });
    fetchBooks();
  };

  const handleSearchBook = async (query) => {
    const response = await fetch(`/api/books?search=${query}`);
    const data = await response.json();
    setBooks(data);
};

return (
  <div>
    <SearchBook onSearch={handleSearchBook} />
    <BookList books={books} onEdit={setEditingBook} onDelete={handleDeleteBook} />
    {editingBook ? (
      <EditBook book={editingBook} onUpdate={handleUpdateBook} onCancel={() => setEditingBook(null)} />
    ) : (
      <AddBook onAdd={handleAddBook} />
    )}
  </div>
);
}

export default Catalog;
