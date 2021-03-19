import React, { Component } from 'react';


class Forecast extends Component {
    
    
    render() { 

           let forecast = [];
           let forecastData  = Array.from(this.props.forecastData); 
           forecastData.forEach((element, elementIndex) => {
            if (elementIndex > 0 && elementIndex<6 ){
            let sumTemperature = parseInt(element.temp.max) +  parseInt(element.temp.min);
            let temperature = sumTemperature/2;
            let humidity =  element.humidity;
            let weatherIconUrl = `http://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`;
            let weatherIconDesc = element.weather[0].description;
            let dateUnix = parseInt(element.dt);
            let datef = new Date( dateUnix * 1000);
            let datefMonth = datef.getMonth() + 1; 
            let forcastDate = datefMonth + "/" + datef.getDate() + "/" + datef.getFullYear();      
            forecast.push({Date: forcastDate, temperature: temperature, humidity: humidity, iconUrl: weatherIconUrl, iconDesc: weatherIconDesc});
            console.log(forecast);
            }
           });
            

        return (   
            <React.Fragment>
                <section id="forecast">
                  <h2>5-Days Forecast:</h2>
                  <ul className='Forecast'>
                   {forecast.map((element, elementIndex) => 
                  
                   <li key ={elementIndex} >
                       <h3>{element.Date}</h3>
                    <img src={element.iconUrl} alt={element.iconDesc} />
                    <p>Temp: {element.temperature}&deg;{this.props.unitTemp}</p><br/>
                    <p>Humidity: {element.humidity}%</p>
                   </li>)}</ul>               
                </section>

            </React.Fragment> 
            
            // <React.Fragment>
            //         {/* <section id="forecast">
            //             <p>This is the forecast Section</p>
            //         </section> */}
            // </React.Fragment>
         );
    }

}

 
export default Forecast;