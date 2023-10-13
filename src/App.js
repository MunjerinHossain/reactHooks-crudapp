// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AllPost from './AllPost.js'
import Home from "./Home.js"

function App() {
  return (
    <Router>
      <div className="App">

        <Route path="/" component={Home} />
       
       
      </div>
    </Router>
  );
}

export default App;
