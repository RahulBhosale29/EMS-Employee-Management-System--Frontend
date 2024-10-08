import axios from "axios";

const REST_API_BASE_URL ='http://localhost:8080/api';

export const listEmployees = () => axios.get(REST_API_BASE_URL + '/getallemp' );

export const createEmployee = (employee) => axios.post(REST_API_BASE_URL + '/addemp',employee);

// export const getEmployee = (employeeId) => axios.get(REST_API_BASE_URL + '/getbyid/{id}',employeeId);

export const getEmployee = (employeeId) => axios.get(`${REST_API_BASE_URL}/getbyid/${employeeId}`);

// export const updateEmployee = (employeeId,employee) => axios.put(REST_API_BASE_URL + '/updateemp/${employeeId}', employee ) 

export const updateEmployee = (employeeId, employee) => 
    axios.put(`${REST_API_BASE_URL}/updateemp/${employeeId}`, employee);

export const deleteEmployee = (employeeId) => 
    axios.delete(`${REST_API_BASE_URL}/deletebyid/${employeeId}`);

