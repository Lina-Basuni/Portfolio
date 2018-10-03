import React, { Component } from 'react';
import dArrow from './dArrow.png';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import logo from './lb2.png';
import './App.css';
import NavBar from './navBar';


class MainPage extends Component{

  componentDidMount(){
      this.props.changePage("Main Page")
  }

  render(){

    return(
      <div>
        <div className="App-intro">
          <div className="mainPage">
           <div className="main-text">
              <div className="intro-1">
                Hello, I am Lina Basuni
              </div>
              <div className="intro-2">
                And Im a Front-End Web Developer
              </div>
            </div>
            <div className="dArrow-container">
              <Link to='/about'><img src={dArrow} className="dArrow" alt="arrow" /></Link>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default MainPage;
