import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import BookDetails from './components/BookDetails';
import Quotes from './components/Quotes';
import NotFound from './components/NotFound'; // Adjust the path based on your project structure

const App = () => (
  <Router>
    <div className="App">
      <Navbar />
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/books/:bookId" component={BookDetails} />
          <Route path="/quotes" component={Quotes} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </div>
  </Router>
);

export default App;
