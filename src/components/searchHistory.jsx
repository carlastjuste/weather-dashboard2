import { RequestHeaderFieldsTooLarge } from 'http-errors';
import React, { Component } from 'react';
import SearchWeather from "./searchWeather";

class SearchHistory extends Component {
    state = { 
       
     }


     async componentDidMount() {
        //  let searchCity = [{'name': 'holla', 'lat': '', 'lon':''}];
        //  localStorage.setItem('searchCity', JSON.stringify(searchCity));
  }
    
    // save (obj) {

        
    //     let previousSearch = JSON.parse(localStorage.getItem('searchCity')) || [];
    //     console.log(previousSearch);
    //    // let nosearchHistory = !previousSearch[0]
    //     //if (nosearchHistory) {return <p> No search history.</p>;}
        
    //     let newSearchHistory = previousSearch.push(obj);
    //     localStorage.setItem('searchCity', JSON.stringify(newSearchHistory)); 

    // }
   

    render() { 

         let previousSearch = JSON.parse(localStorage.getItem('searchCity')) || [];
        //  //console.log(`test${previousSearch[0].name}`);

        
        let searchElement = {'name': this.props.city, 'lat': this.props.latitude, 'lon':this.props.longitude};
        console.log(searchElement);
         let searchCity = [searchElement];
        // //  searchCity.unshift(searchElement)
        console.log(previousSearch);
        
        console.log(previousSearch.length == 0);
        if(previousSearch.length == 0) {
            localStorage.setItem('searchCity', JSON.stringify(previousSearch));
            return <p> No search history.</p>;
        }

        if(previousSearch.length != 0) {

        }

        // if (previousSearch[0].name == '' && this.props.city=='')  {
        //     localStorage.setItem('searchCity', JSON.stringify(previousSearch));
        // return <p> No search history.</p>;      
        // }

        // if (previousSearch[0].name !== '' && this.props.city !=='')  {
        //     searchCity.unshift(searchElement);
        //     localStorage.setItem('searchCity', JSON.stringify(searchCity));
        //     previousSearch = JSON.parse(localStorage.getItem('searchCity'));
        // return <p>Hello {this.props.city}</p>;      
        // }
    
    

        //  if (previousSearch.length != 0) {
        //     previousSearch.unshift(searchElement);
        // //    // localStorage.setItem("searchCity", JSON.stringify(SearchHistory) );

        //   }


            
          
            

            // if (searchHistory.length == 0 && searchElement.name == "") 
            // return <p> No search history.</p>;

            // if(searchHistory.length != 0) {
            //     if (searchElement.name != "") {
            //         searchHistory.unshift(searchElement);
            //         localStorage.setItem('searchCity', JSON.stringify(searchHistory));

            //     }
            //}
         

         
                // let SearchHistory = JSON.parse(localStorage.getItem('searchCity'));
                // SearchHistory.unshift(searchElement);
                // localStorage.setItem('searchCity', JSON.stringify(searchElement));
                // SearchHistory.unshift(searchElement); 
         
        //  else
        //  if (this.props.name !== "") {
        //     let searchElement = {'name': this.props.city, 'lat': this.props.latitude, 'lon':this.props.longitude};
        //     let searchCity = [searchElement];
        //     let SearchHistory = JSON.parse(localStorage.getItem("searchCity"));     
        //         if(SearchHistory == null) {
        //             localStorage.setItem('searchCity', JSON.stringify(searchCity));
        //         } else
        //         {   
        //             localStorage.setItem('searchCity', JSON.stringify(searchCity))
        //             SearchHistory.unshift(searchElement);
        //             localStorage.setItem("searchCity", JSON.stringify(SearchHistory) )
        //         }
        //  }
       // this.save(searchElement);

        return (

                <div id="previousSearch">
                    <ul>

                    </ul>
                    
                </div>

          );
    }
}
 
export default SearchHistory ;