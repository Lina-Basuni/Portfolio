import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Portfolio extends Component{
  componentDidMount(){
      this.props.changePage("Portfolio");
      document.body.style.backgroundColor='white';
      document.body.style.backgroundImage="url(' ')";


  }
  render(){

    return(
      <div>
        Portfolio
      </div>
    )
  }
}

export default Portfolio;
