import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavBar from './navBar';
import App from './App';

class About extends Component{
  componentDidMount(){
      this.props.changePage("About Me");
      document.body.style.backgroundImage="url('')";
      document.body.style.backgroundColor='white';

  }
  render(){

    return(
      <div className="aboutContainer">
      <div className="col-1"></div>
      <div className="aboutContent">
      <p>
        I am a Front-End Web Developer and a Computer Science student ,
        I’m very enthusiastic and determined towards Web Development and Programming ,
        I am passionate towards what I study and what I do .
      </p>
      <p>
      I believe in working hard and smart .
      I have great goals and plans for my life and I work accordingly.
      I believe that there is no elevator to success, you have to take the stairs.
      </p>
      <p>
      I'm a certified Front End Web developer from Udacity,
      with enough experience to convert any design into a responsive web page with consistent UI elements .
      </p>
      <p>
      Highly creative and multi talented with extensive talent in
      HTML5 ,CSS , JavaScript, AJAX , JQuery, Bootstrap, and React.
      I also have experience with using APIs.
      </p>
      <p>
      I'm accustomed to performing in deadline-driven environments
      with an emphasis on working within budget requirements.
      </p>

      </div>
      <div className="col-3"></div>
      </div>
    )
  }
}

export default About;
