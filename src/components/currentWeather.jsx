import React, { Component } from 'react';
import SearchCity from "./seachCity";
import API from "../utils/API";

class  CurrentWeather extends Component {
    state = {
        unitTemp:"F",
        unitWind:" MPH",
      };

      getCurrentDate = (timeStamp) =>{
        var curDate= new Date (parseInt(timeStamp) * 1000);
        var curDateMonth = curDate.getMonth() + 1 ;
        return curDateMonth + "/" + curDate.getDate() + "/" + curDate.getFullYear();
      }
    


    render() { 

     let uvIndexcolor = "";
     let currentUVI = this.props.currentWeatherData.uvi;
     if (currentUVI<5) {
       uvIndexcolor = "green";
     }else if (currentUVI>=7) {
       uvIndexcolor = "red";
     }else {
       uvIndexcolor = "yellow";
     }

        return ( 
        <React.Fragment>
            <section id="current-weather-display">
               <h1>{this.props.searchCity} ({this.getCurrentDate(this.props.currentWeatherData.dt)})</h1>
               {this.props.currentWeatherData.weather && <img src={"http://openweathermap.org/img/wn/"+this.props.currentWeatherData.weather[0].icon+"@2x.png"} 
               alt={this.props.currentWeatherData.weather[0].description} />}
               <ul>
                 <li>Temperature: {this.props.currentWeatherData.temp} &deg;{this.state.unitTemp}</li>
                 <li>Humidity: {this.props.currentWeatherData.humidity}<span> %</span></li>
                 <li>Wind Speed: {this.props.currentWeatherData.wind_speed}{this.state.unitWind}</li>
                 <li className={uvIndexcolor}>UV Index: <span>{this.props.currentWeatherData.uvi}</span></li>
              </ul>
            </section>
        </React.Fragment> );
    }
}

export default CurrentWeather ;

