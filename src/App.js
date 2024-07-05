// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddBookPage from './pages/AddBookPage';
import EditBookPage from './pages/EditBookPage';

const App = () => {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">Book Hub</Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add">Add Book</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container mt-3">
          <Routes>
            <Route path="/" exact component={HomePage} />
            <Route path="/add" component={AddBookPage} />
            <Route path="/edit/:id" component={EditBookPage} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
