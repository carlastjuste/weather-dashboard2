import axios from "axios";
import React, { Component } from 'react';
import API from "../utils/API";
import Forecast from "./forecast";
import CurrentWeather from "./currentWeather";
import SearchWeather from "./searchWeather";


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
    let searchCity = [{'name': '', 'lat': '', 'lon':''}];
    localStorage.setItem('searchCity', JSON.stringify(searchCity));
        this.getWeatherInfo();
  }

  getWeather = (city, current, forecast) => {
    this.setState({searchCity: city, currentWeather:current, forecast: forecast });
    //this.getWeatherInfo();
}

async getWeatherInfo (){
    const subUrl = `${this.state.defaultCityLat}&lon=${this.state.defaultCityLon}&units=${this.state.defaultUnit}`;
    const {data: weatherData} = await API.oneCall(subUrl);
    this.setState({currentWeather: weatherData.current,forecast: weatherData.daily})
    console.log(weatherData.current);
    console.log(weatherData.daily);

}

    render() { 
        return ( 
            <React.Fragment>
                
                <SearchWeather weather={this.getWeather} />
                <main>
                <CurrentWeather currentWeatherData={this.state.currentWeather} searchCity= {this.state.searchCity} unitTemp={this.state.unitTemp} unitWind={this.state.unitWind} />
                <Forecast forecastData={this.state.forecast} unitTemp={this.state.unitTemp} />
                </main>
            </React.Fragment>
         );
    }
}
 
export default weather;