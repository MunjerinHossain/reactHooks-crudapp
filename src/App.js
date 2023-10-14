// import logo from './logo.svg';
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AllPost from "./AllPost.js";
import Home from "./Home.js";
import Dashboard from "./Dashboard";
import Menu from "./Menu";
import AllTasks from "./Tasks/AllTasks"
import AllProject from "./Project/AllProject"
import CreateProject from "./Project/CreateProject";

function App() {
  return (
    <div className="App">
      <Router>
        <Menu/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/allTasks" component={AllTasks} />
          <Route path="/allProject" component={AllProject} />
          <Route path="/createProject" component={CreateProject} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
