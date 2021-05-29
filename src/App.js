import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/HomePage/Home/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/home">
        <Home />
        </Route>
        <Route exact path="/">
        <Home />
        </Route>
      </div>
    </Router>
  );
}

export default App;
