import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const HomeTitle = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
`;

const HomeDescription = styled.p`
  font-size: 1.2em;
  margin-bottom: 20px;
  text-align: center;
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;
`;

const Home = () => (
  <HomeContainer>
    <HomeTitle>Welcome to Book Hub</HomeTitle>
    <HomeDescription>
      Your one-stop destination for managing and exploring a vast collection of books. Browse through our extensive catalog, read inspiring quotes, and more!
    </HomeDescription>
    <NavLinks>
      <Link to="/books">Book List</Link>
      <Link to="/quotes">Quotes</Link>
    </NavLinks>
  </HomeContainer>
);

export default Home;
