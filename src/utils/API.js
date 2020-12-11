import axios from 'axios';
const URL = "https://randomapi.com/api/?results=40";


export default {
  searchEmployees: function() {
    return axios.get(URL)
    }
  };

