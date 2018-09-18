import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class NavBar extends Component{
  render(){

    return(
      <div className="NavBar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/hire">Hire Me</Link></li>
      </ul>
      </div>
    )
  }
}

export default NavBar;
