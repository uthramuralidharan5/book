import React from 'react';

function BookList({ books }) {
  return (
    <ul>
      {books.map((book, index) => (
        <li key={index}>
          {book.title} by {book.author}
        </li>
      ))}
    </ul>
  );
}

export default BookList;
