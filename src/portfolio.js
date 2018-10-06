import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Portfolio extends Component{
  componentDidMount(){
      this.props.changePage("Portfolio");
      document.body.style.backgroundColor='pink';

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
