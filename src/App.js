import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BookDetails from './components/BookDetails';
import TopRatedBooks from './components/TopRatedBooks';
import SearchBooks from './components/SearchBooks';
import Login from './components/Login';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" component={TopRatedBooks} />
        <Route path="/books/:bookId" component={BookDetails} />
        <Route path="/search" component={SearchBooks} />
        <Route path="/login" component={Login} />
        <Route component={NotFound} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;