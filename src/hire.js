import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Hire extends Component{
  componentDidMount(){
      this.props.changePage("Hire Me");
      var bgImg=document.getElementsByClassName('backgroundImg')[0];
      bgImg.style.backgroundColor='white';
      bgImg.style.backgroundImage="url(' ')";



  }
  render(){

    return(
      <div className="container">
      <div className="col-1"></div>
      <div className="content">
        <p>
          I am available to contact on :
        </p>
        <div className="miniContainer">
          <img className="mailImg" src="mail.svg" alt="mail"/>
          <p className="mailTxt">
            Lina.ahmedkamal@gmail.com
          </p>
        </div>
        <div className="miniContainer">
          <img className="linkedinImg" src="linkedin.svg" alt="linkedin"/>
          <p className="linkedinTxt">
            www.linkedin.com/in/lina-basuni-a08359b4
          </p>
        </div>
      </div>
      <div className="col-3"></div>
      </div>
    )
  }
}

export default Hire;
