import React, { Component } from 'react';

class SearchCity extends Component {
   // state = {  }
    render() { 
        return ( 
            <React.Fragment>
                
                <aside>
                    <div class='searchBlock'>
                        <label for="searchWeather">Search for a City:</label>
                        <input id="searchWeather" type="text" name="search">
                        </input>
                        <button id="searchWeatherBtn" type="submit">Go</button>
                    </div>
                    <div id="previousSearch">
                        <p>Previous Seach Section</p>
                    </div>
                </aside>

                
            </React.Fragment>
         );
    }
}
 
export default SearchCity;