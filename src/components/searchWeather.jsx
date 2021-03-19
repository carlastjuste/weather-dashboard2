import axios from "axios";
import React, { Component } from 'react';
import API from "../utils/API";
import SearchHistory from "./searchHistory";


class SearchWeather extends Component{
    state = {
       searchValue: "" ,
       city:"",
       latitude:"",
       longitude:"",
       currentWeather:"",
       forecast:"",
       unit:"imperial"
    }

async getWeatherInfo (){
        const {data: locationData} = await API.search(this.state.searchValue);
        this.setState({city: locationData.name, latitude: locationData.coord.lat, longitude: locationData.coord.lon});
        const subUrl = `${locationData.coord.lat}&lon=${locationData.coord.lon}&units=${this.state.unit}`;
        const {data: weatherData} = await API.oneCall(subUrl);
        this.setState({currentWeather: weatherData.current,forecast: weatherData.daily});
        this.sendWeather(locationData.name,weatherData.current, weatherData.daily) ;
       // console.log(weatherData.current);
       // console.log(weatherData.daily);
    }

    sendWeather = (city,current, forecast) => this.props.weather(city, current, forecast) ;
    
  
    handleSubmitSearch = e => {
        e.preventDefault();
        this.getWeatherInfo();
       // this.sendGeoInfo(this.state.city, this.state.latitude, this.state.longitude);
    }

    handleChange = e => {
        let searchValue = this.state.SearchValue;
        searchValue = e.currentTarget.value;
        this.setState({searchValue});

    }

    render(){
        return ( 
    <React.Fragment> 
            <aside>
            <div className='searchBlock'>
                <form onSubmit={this.handleSubmitSearch}>
                    <label htmlFor="search-weather"></label>
                    <input 
                    autoFocus 
                    id="search-weather" 
                    value={this.state.SearchValue}
                    onChange={this.handleChange}
                    type="search" 
                    className="form-control" 
                    name="search" />
                    <small className="form-text text-muted">Search current weather and 5 days forecast by City Name, US State or Country</small>
                    <button onClick={this.handleSubmitSearch} id="searchWeatherBtn" type="submit" className="btn btn-primary mt-3">Search</button>
                </form>
            </div> 
            <SearchHistory city={this.state.city} latitude={this.state.latitude} longitude ={this.state.longitude}/>
            </aside>  
    </React.Fragment> 
    );
    }
}

export default SearchWeather;