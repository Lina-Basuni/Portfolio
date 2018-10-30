import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PBox from './pBox';

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
          <PBox/>
          <PBox/>
          <PBox/>
          <PBox/>
          <PBox/>
      </div>
    )
  }
}

export default Portfolio;
