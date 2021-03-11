//import logo from './logo.svg';
import React, { Component } from 'react';
import Header from './components/header';
import CurrentWeather from './components/currentWeather';
import Forecast from './components/forecast';
import './App.css';
//import { render } from '@testing-library/react';



class App extends Component {

  render() { 
    return ( 
    <React.Fragment>
      <Header />
      <main>
        <CurrentWeather />
        <Forecast />
      </main>
    </React.Fragment>

     );
  }
}
 
export default App; 
