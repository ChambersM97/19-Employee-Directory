import axios from 'axios';
const URL = "https://randomuser.me/api/?results=50";


export default {
  searchEmployees: function() {
    console.log(URL)
    return axios.get(URL)
    }
  };

