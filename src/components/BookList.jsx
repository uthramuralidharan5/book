import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BookListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;

const BookCard = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  width: 200px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const BookList = ({ books }) => (
  <BookListContainer>
    {books.map((book) => (
      <BookCard key={book.id}>
        <h3>{book.title}</h3>
        <p>{book.author}</p>
        <Link to={`/books/${book.id}`}>View Details</Link>
      </BookCard>
    ))}
  </BookListContainer>
);

export default BookList;
