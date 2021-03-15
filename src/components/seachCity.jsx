import axios from "axios";
import React, { Component } from 'react';
import API from "../utils/API";

class SearchCity extends Component{
    state = {
       searchValue: "" ,
       latitude:"",
       longitude:"",
       units:"imperial",
       current:"",
       forecast:""
    }

    getWeatherInfo = (query) => {
        API.search(query).then(res => {
            let name = res.data.name;
            let lat = res.data.coord.lat;
            let lon = res.data.coord.lon;
          this.setState({ searchValue: name, latitude: lat, longitude: lon})
          let subUrl = `${lat}&lon=${lon}&units=${this.state.units}`;
          this.getWeather(subUrl);
            console.log(res.data);
            console.log("axios");
        });
    }
    
    getWeather= (url) => {
        API.oneCall(url).then(res => {
            console.log(res.data);
            console.log(res.data.current);
            this.setState({current:res.data.current});
            this.setState({forecast:res.data.daily});
            console.log(res.data.daily);
            console.log("axios2");
        });
    }



    handleSubmitSearch = e => {
        e.preventDefault();
        this.getWeatherInfo(this.state.searchValue);
    }

    

    handleChange = e => {
        let searchValue = this.state.SearchValue;
        searchValue = e.currentTarget.value;
        this.setState({searchValue});

    }

    render(){
        return ( 
    
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
                    <button id="searchWeatherBtn" type="submit" className="btn btn-primary mt-3">Search</button>
                </form>
            </div>       
    
    );
        
    }

}
    //changeDefaultValue = 

export default SearchCity;