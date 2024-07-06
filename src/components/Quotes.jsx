import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const QuotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const QuoteCard = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  width: 60%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const QuoteContent = styled.p`
  font-size: 1.2em;
  font-style: italic;
`;

const QuoteAuthor = styled.p`
  text-align: right;
  margin-top: 10px;
  font-weight: bold;
`;

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const fetchQuotes = async () => {
      const response = await fetch('https://api.quotable.io/quotes');
      const data = await response.json();
      setQuotes(data.results);
    };

    fetchQuotes();
  }, []);

  return (
    <QuotesContainer>
      {quotes.map((quote) => (
        <QuoteCard key={quote._id}>
          <QuoteContent>"{quote.content}"</QuoteContent>
          <QuoteAuthor>- {quote.author}</QuoteAuthor>
        </QuoteCard>
      ))}
    </QuotesContainer>
  );
};

export default Quotes;
