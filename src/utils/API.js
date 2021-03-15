import axios from "axios";

const BASEURL ="https://api.openweathermap.org/data/2.5/weather?q=";
const APIKEY = "&appid=4354bae4bc4f80de34b0ce15453d2200";
const BASEURL2  = "https://api.openweathermap.org/data/2.5/onecall?lat=";
const exclusion ="&exclude=hourly,minutely,alerts";

export default {
    search: function(query) {
      return axios.get(BASEURL + query + APIKEY);
    },

    oneCall: function(query) {
        return axios.get(BASEURL2 + query + exclusion + APIKEY);
      }
  };
  