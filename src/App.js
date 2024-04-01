// src/App.js
import React, { useState } from 'react';
import EmployeeList from './components/EmployeeList';
import AddEmployeeForm from './components/AddEmployeeForm';
import EditEmployeeForm from './components/EditEmployeeForm';
import EmployeeDetails from './components/EmployeeDetails';

const App = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleEmployeeSelect = (employee) => {
    setSelectedEmployee(employee);
  };

  const handleAddEmployee = (newEmployee) => {
    // Implement add functionality here
  };

  const handleUpdateEmployee = (updatedEmployee) => {
    // Implement update functionality here
  };

  return (
    <div>
      <EmployeeList onSelect={handleEmployeeSelect} />
      <AddEmployeeForm onAdd={handleAddEmployee} />
      {selectedEmployee && (
        <>
          <EditEmployeeForm employee={selectedEmployee} onUpdate={handleUpdateEmployee} />
          <EmployeeDetails employee={selectedEmployee} />
        </>
      )}
    </div>
  );
};

export default App;
