import React from 'eact';
import { BrowserRouter, Route, Switch } from 'eact-router-dom';
import Header from './Header';
import Footer from './Footer';
import BookDetails from './BookDetails';
import TopRatedBooks from './TopRatedBooks';
import SearchBooks from './SearchBooks';
import Login from './Login';
import NotFound from './NotFound';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={TopRatedBooks} />
        <Route path="/books/:bookId" component={BookDetails} />
        <Route path="/search" component={SearchBooks} />
        <Route path="/login" component={Login} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;