import React, { Component } from 'react';
import dArrow from './dArrow.png';


class MainPage extends Component{
  render(){

    return(
      <div className="mainPage">
        <div className="dArrow-container">
          <img src={dArrow} className="dArrow" alt="arrow" />
        </div>
      </div>
    )
  }
}

export default MainPage;
