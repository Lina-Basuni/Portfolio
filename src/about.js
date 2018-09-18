import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class About extends Component{
  componentWillMount(){
      this.props.changePage("About Me")
  }
  render(){

    return(
      <div>
        About Me
      </div>
    )
  }
}

export default About;
