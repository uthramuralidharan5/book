import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';
import BooksPage from './pages/BooksPage';
import './styles.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/users" component={UsersPage} />
          <Route path="/books" component={BooksPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
