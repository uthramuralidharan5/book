// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import UserManagement from './components/UserManagement/UserManagement';
import Catalog from './components/Catalog/Catalog';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/users" element={<UserManagement />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/" element={<h1>Welcome to Book Hub</h1>} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
