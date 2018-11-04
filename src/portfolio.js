import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link , Redirect} from 'react-router-dom';
import PBox from './pBox';

import ImageGallery from 'react-image-gallery';


class Portfolio extends Component{
  componentDidMount(){
      this.props.changePage("Portfolio");
      var bgImg=document.getElementsByClassName('backgroundImg')[0];
      bgImg.style.backgroundColor='white';
      bgImg.style.backgroundImage="url(' ')";



  }
  render(){

    const images = [
      {
        original:'memorygame.png',
        thumbnail: 'https://via.placeholder.com/20x20',
        description:<Redirect from="/portfolio" to="https://lina-basuni.github.io/Memory_Game/" />

      },
      {
        original: 'https://via.placeholder.com/1600x500',
        thumbnail: 'https://via.placeholder.com/20x20',
        description:"Webpage 2"
      },
      {
        original: 'https://via.placeholder.com/1600x500',
        thumbnail: 'https://via.placeholder.com/20x20',
        description:"Webpage 3"
      }
    ]

    return (
      <ImageGallery items={images} showPlayButton={false} showThumbnails={false} />
    );
  }
}

export default Portfolio;
