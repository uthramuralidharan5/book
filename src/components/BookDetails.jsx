import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import useFetch from '../components/UseFetch'; // Adjust the path based on your project structure

const BookDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const BookCard = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  width: 60%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const BookTitle = styled.h2`
  font-size: 2em;
  margin-bottom: 10px;
`;

const BookAuthor = styled.p`
  font-size: 1.2em;
  font-style: italic;
  margin-bottom: 10px;
`;

const BookISBN = styled.p`
  margin-bottom: 10px;
`;

const BookPrice = styled.p`
  margin-bottom: 10px;
`;

const BookDescription = styled.p`
  font-size: 1em;
`;

const BookDetails = () => {
  const { bookId } = useParams();
  const { data, loading, error } = useFetch(`https://api.example.com/books/${bookId}`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { title, author, isbn, price, description } = data;

  return (
    <BookDetailsContainer>
      <BookCard>
        <BookTitle>{title}</BookTitle>
        <BookAuthor>By {author}</BookAuthor>
        <BookISBN>ISBN: {isbn}</BookISBN>
        <BookPrice>Price: ${price}</BookPrice>
        <BookDescription>{description}</BookDescription>
      </BookCard>
    </BookDetailsContainer>
  );
};

export default BookDetails;
