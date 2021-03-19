//import logo from './logo.svg';
import React, { Component } from 'react';
import Header from './components/header';
import Weather from './components/weather';
import CurrentWeather from './components/currentWeather';
import Forecast from './components/forecast';
import SearchWeather from './components/searchWeather';
import SearchHistory from './components/searchHistory';
import './App.css';
//import { render } from '@testing-library/react';



class App extends Component {

  render() { 
    return ( 
    <React.Fragment>
      <Header />
  
        <Weather />

    </React.Fragment>

     );
  }
}
 
export default App; 
