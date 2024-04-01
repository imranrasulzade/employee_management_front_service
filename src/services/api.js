// src/services/api.js
import axios from 'axios';

const API_URL = 'https://localhost:8080/api/v1'; // API URL

// all employee
export const getAllEmployees = async () => {
  const response = await axios.get(`${API_URL}/employee/all/`);
  return response.data;
};

// getById
export const getEmployeeById = async (id) => {
  const response = await axios.get(`${API_URL}/employee/view/${id}`);
  return response.data;
};

// add employee
export const addEmployee = async (employeeData) => {
  const response = await axios.post(`${API_URL}/employee/new/`, employeeData);
  return response.data;
};

// edit employee
export const updateEmployee = async (id, employeeData) => {
  const response = await axios.put(`${API_URL}/employee/edit/${id}`, employeeData);
  return response.data;
};

// delete employee
export const deleteEmployee = async (id) => {
  const response = await axios.delete(`${API_URL}/employee/delete/${id}`);
  return response.data;
};
