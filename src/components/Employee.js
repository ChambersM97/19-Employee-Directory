import React, { Component } from 'react';
import API from '../utils/API'


class Employee extends Component() {
    ComponentDidMount() {
        return API.searchEmployees();
    }
    
}



export default Employee;


