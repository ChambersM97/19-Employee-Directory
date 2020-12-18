import axios from 'axios';
const URL = "https://randomuser.me/api/?results=20&nat=us";


export default {
  searchEmployees: function() {
    return axios.get(URL)
    
    }
  };
