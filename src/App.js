import React from 'react';
import Particles from 'react-particles-js';
import Clarifai, { COLOR_MODEL } from 'clarifai';
import Navigation from './components/navigation/navigation';
import facerecognition from './components/facerecognition/facerecognition';
import Logo from './components/logo/logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';

const app = new Clarifai.App({
  apiKey: '4bb12e30667a4c6e8228a03cc5e8d7d0'
});

const particlesOptions = {
    particles: {
      number: {
        value: 30,
        density: {
          enable: true,
          value_area: 800,
        }
      }
    }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log('click');
    app.models.predict(Clarifai.COLOR_MODEL, "https://samples.clarifai.com/face-det.jpg").then(
      function(response) {
        console.log(response);
      },
      function(err) {

      }
    );
      
  }

  render() {
    return (
      <div className="App">
        <Particles className='particles'
          params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
        <faceRecognition />
      </div>
    );
  }
}
  

export default App;
