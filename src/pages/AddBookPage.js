// src/pages/AddBookPage.js
import React from 'react';
import BookForm from '../components/BookForm';
import { addBook } from '../services/apiService';

const AddBookPage = ({ history }) => {
  const handleAddBook = async (book) => {
    try {
      await addBook(book);
      history.push('/');
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  return (
    <div className="container">
      <h1>Add Book</h1>
      <BookForm onSubmit={handleAddBook} />
    </div>
  );
};

export default AddBookPage;
