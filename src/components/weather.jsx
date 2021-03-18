import axios from "axios";
import React, { Component } from 'react';
import API from "../utils/API";
import Forecast from "./forecast";
import CurrentWeather from "./currentWeather";


class weather extends Component {
    state = {
        defaultCity: "Charlotte",
        defaultCityLat:35.2271,
        defaultCityLon:-80.8431,
        defaultUnit:"imperial",
        searchCity:"Charlotte",
        unitTemp:"F",
        unitWind:" MPH",
        currentWeather: "",
        forecast:""
      };


   async componentDidMount() {
      const subUrl = `${this.state.defaultCityLat}&lon=${this.state.defaultCityLon}&units=${this.state.defaultUnit}`;
      const {data: weatherData} = await API.oneCall(subUrl);
      this.setState({currentWeather: weatherData.current,forecast: weatherData.daily})
      console.log(weatherData.current);
      console.log(weatherData.daily);
  }
  
    
    render() { 
        return ( 
            <React.Fragment>
                <CurrentWeather currentWeatherData={this.state.currentWeather} searchCity= {this.state.searchCity} unitTemp={this.state.unitTemp} />
                <Forecast forecastData={this.state.forecast} unitTemp={this.state.unitTemp} unitWind={this.state.unitWind}/>
            </React.Fragment>
         );
    }
}
 
export default weather;