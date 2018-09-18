import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Portfolio extends Component{
  componentWillMount(){
      this.props.changePage("Portfolio")
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
