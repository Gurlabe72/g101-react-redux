import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Sidebar from './common/Sidebar';
import Navbar from './common/Navbar';
import Github from './Github';
import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App container">
            <Link to="/github" className="btn btn-lg btn-primary">
              Github
            </Link>
            <Route path='/' exact component={Sidebar} />
            <Route path='/navbar' exact component={Navbar} />
            <Route path='/github' exact component={Github} />
          </div>
        </Router>
    );
  }
}

export default App;
