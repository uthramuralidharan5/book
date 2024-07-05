import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="home-page">
      <h1>Welcome to Book Hub</h1>
      <nav>
        <Link to="/users">Manage Users</Link>
        <Link to="/books">Manage Books</Link>
      </nav>
    </div>
  );
}

export default HomePage;
