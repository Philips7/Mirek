import React, { Component } from 'react';
import './App.css';

import image from './assets/png/7ninjas.png'

const defaultVideo = './testoviron.mp4'

class App extends Component {
  state = {
    videoUrl: defaultVideo,
      value: defaultVideo
  }

  render() {
    const { videoUrl } = this.state
    return (
      <div className="App">
        <img src={image} className="image" />
        <div className="video">
          <video className="videoWrapper" controls autoPlay>
              <source src={videoUrl} type="video/mp4" />
          </video>
        </div>
      </div>
    );
  }
}

export default App;
