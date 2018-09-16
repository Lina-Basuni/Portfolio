import React, { Component } from 'react';
import logo from './lb2.png';
import './App.css';
import MainPage from './mainPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="logo-container">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="title-container">

          </div>
        </header>
        <div className="App-intro">
          <MainPage/>
        </div>
      </div>
    );
  }
}

export default App;
