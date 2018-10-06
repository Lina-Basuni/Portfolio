import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import logo from './lb2.png';
import './App.css';
import MainPage from './mainPage';
import NavBar from './navBar';
import About from './about';
import Hire from './hire';
import Portfolio from './portfolio'
class App extends Component {
  state={
    currentPage:''
  }

  changePage=(page)=>{
    this.setState({currentPage:page})
  }




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
        <MainPage
          changePage={this.changePage}
        />
      )}/>
      <Route path='/about' render={()=>(
        <About
          changePage={this.changePage}
        />
      )}/>
      <Route path='/portfolio' render={()=>(
        <Portfolio
          changePage={this.changePage}
        />
      )}/>
      <Route path='/hire' render={()=>(
        <Hire
          changePage={this.changePage}
        />
      )}/>
      </div>
      </Router>
    );
  }
}

export default App;
