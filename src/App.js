import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Match, Miss } from 'react-router';
import Home from './page_components/Home';
import About from './page_components/About';
import Writings from './page_components/Writings';
import Resources from './page_components/Resources';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/writings'>Writings</Link></li>
            <li><Link to='/resources'>Resources</Link></li>
          </ul>
          <hr/>
            <Match exactly pattern='/' component={Home}/>
            <Match pattern='/about' component={About}/>
            <Match pattern='/writings' component={Writings}/>
            <Match pattern='/resources' component={Resources}/>
        </div>
      </Router>
    );
  }
}

export default App;
