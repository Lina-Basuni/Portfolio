import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class About extends Component{
  componentDidMount(){
      this.props.changePage("About Me");
      document.body.style.backgroundImage="url('')";
      document.body.style.backgroundColor='white';

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
