// src/components/EmployeeDetails.js
import React from 'react';

const EmployeeDetails = ({ employee }) => {
  return (
    <div>
      <h2>Employee Details</h2>
      <p>Name: {employee.name}</p>
      <p>Position: {employee.surname}</p>
    </div>
  );
};

export default EmployeeDetails;
