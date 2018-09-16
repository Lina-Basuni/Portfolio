import React, { Component } from 'react';
import dArrow from './dArrow.png';


class MainPage extends Component{
  render(){

    return(
      <div className="mainPage">
       <div className="main-text">
          <div className="intro-1">
            Hello, I am Lina Basuni
          </div>
          <div className="intro-2">
            And I'm a Front-End Web Developer
          </div>
        </div>
        <div className="dArrow-container">
          <img src={dArrow} className="dArrow" alt="arrow" />
        </div>
      </div>
    )
  }
}

export default MainPage;
