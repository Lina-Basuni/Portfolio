import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Hire extends Component{
  componentDidMount(){
      this.props.changePage("Hire Me");
      document.body.style.backgroundColor='white';
      document.body.style.backgroundImage="url(' ')";


  }
  render(){

    return(
      <div>
        Hire Me
      </div>
    )
  }
}

export default Hire;
