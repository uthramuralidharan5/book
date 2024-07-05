import React from 'react';
import BookList from '../components/BookList';

const HomePage = () => {
  return (
    <div className="container">
      <h1>Book Hub</h1>
      <BookList />
    </div>
  );
};

export default HomePage;
