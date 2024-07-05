import React from 'react';

const BookCard = ({ book, onDelete }) => {
  return (
    <div className="card">
      <img src={book.image} alt={book.title} />
      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        <p className="card-text">Author: {book.author}</p>
        <p className="card-text">ISBN: {book.isbn}</p>
        <p className="card-text">Price: ${book.price}</p>
        <button onClick={() => onDelete(book._id)} className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
};

export default BookCard;
