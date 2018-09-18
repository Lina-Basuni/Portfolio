import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import logo from './lb2.png';
import './App.css';
import MainPage from './mainPage';
import NavBar from './navBar';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <header className="App-header">
        <div className="logo-container">
          <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
        </div>
        <div className="title-container">
          <NavBar/>
        </div>
      </header>
      <Route exact path='/' render={()=>(
        <MainPage/>
      )}/>
      </div>
      </Router>
    );
  }
}

export default App;
