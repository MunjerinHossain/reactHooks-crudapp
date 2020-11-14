import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AllPost from './AllPost.js'

function App() {
  return (
    <Router>
      <div className="App">

        <Route path="/" component={AllPost} />
       
       
      </div>
    </Router>
  );
}

export default App;
