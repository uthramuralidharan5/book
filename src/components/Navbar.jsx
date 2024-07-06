import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: #333;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavTitle = styled.h1`
  color: white;
  margin: 0;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.2em;
  transition: color 0.2s;

  &:hover {
    color: #ddd;
  }
`;

const Navbar = () => (
  <NavbarContainer>
    <NavTitle>Book Hub</NavTitle>
    <NavLinks>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/books">Book List</NavLink>
      <NavLink to="/quotes">Quotes</NavLink>
    </NavLinks>
  </NavbarContainer>
);

export default Navbar;
