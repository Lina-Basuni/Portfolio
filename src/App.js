import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link ,Redirect } from 'react-router-dom';

import logo from './lb2.png';
import './App.css';
import MainPage from './mainPage';
import NavBar from './navBar';
import About from './about';
import Hire from './hire';
import Portfolio from './portfolio'
class App extends Component {
  state={
    currentPage:'',
    pageIsLoaded:' '
  }

  componentWillMount(){
    this.setState({pageIsLoaded:true})
    console.log("App Page is on");

  }

 checkBeforeRenderMainPage=()=>{
   if (this.state.pageIsLoaded) {
     console.log("App is loaded");
     return(<MainPage
         changePage={this.changePage}
       /> )
   }
   else{
     console.log("error");
   }
 }

  changePage=(page)=>{
    this.setState({currentPage:page})

  }




  render() {
    return (
      <Router>
      <div className="App">
      <header className="App-header">
        <div className="logo-container">
          <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
        </div>
        <div className="title-container">
          <NavBar
            currentPage={this.state.currentPage}
          />
        </div>
      </header>
      <Route exact path='/' render={()=>(
          this.checkBeforeRenderMainPage()
    )}/>
      <Route path='/about' render={()=>(
        <About
          changePage={this.changePage}
        />
      )}/>
      <Route path='/portfolio' render={()=>(
        <Portfolio
          changePage={this.changePage}
        />
      )}/>
      <Route path='/hire' render={()=>(
        <Hire
          changePage={this.changePage}
        />
      )}/>
      <Route path='/memorygame' component={() => window.location = 'https://lina-basuni.github.io/Memory_Game/'}/>
      </div>
      </Router>
    );
  }
}

export default App;
