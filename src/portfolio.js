import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Portfolio extends Component{
  componentDidMount(){
      this.props.changePage("Portfolio");
      var bgImg=document.getElementsByClassName('backgroundImg')[0];
      bgImg.style.backgroundColor='white';
      bgImg.style.backgroundImage="url(' ')";



  }
  render(){

    return(
      <div className="portfolio_container">
        <div className="pFirstPage">Click Here to Show</div>
        <div className="pBox">
          <div className="pBox_img">IMG</div>
          <div className="pBox_title">TITLE</div>
        </div>
        <div className="pBox">
          <div className="pBox_img">IMG</div>
          <div className="pBox_title">TITLE</div>
        </div>
        <div className="pBox">
          <div className="pBox_img">IMG</div>
          <div className="pBox_title">TITLE</div>
        </div>
        <div className="pBox">
          <div className="pBox_img">IMG</div>
          <div className="pBox_title">TITLE</div>
        </div>
        <div className="pBox">
          <div className="pBox_img">IMG</div>
          <div className="pBox_title">TITLE</div>
        </div>
        <div className="pBox">
          <div className="pBox_img">IMG</div>
          <div className="pBox_title">TITLE</div>
        </div>
        <div className="pBox">
          <div className="pBox_img">IMG</div>
          <div className="pBox_title">TITLE</div>
        </div>
      </div>
    )
  }
}

export default Portfolio;
