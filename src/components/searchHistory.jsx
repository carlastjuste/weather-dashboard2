import React, { Component } from 'react';

class SearchHistory extends Component {
    state = { 
        previousCitySearch : JSON.parse(localStorage.getItem("searchCity"))
     }
    
    renderSearchHistory() {
        //console.log(this.state.previousCitySearch);
        if (this.state.previousCitySearch == null) return <p> No seach history.</p>;

        return <ul>{this.state.previousCitySearch.map(previousSearchItem => <li>{previousSearchItem}</li>)}</ul>
        
    }
   

    render() { 
        return (

                <div id="previousSearch">
                    {this.renderSearchHistory()}
                </div>

          );
    }
}
 
export default SearchHistory ;