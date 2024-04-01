// src/components/EditEmployeeForm.js
import React, { useState } from 'react';
import { updateEmployee } from '../services/api';

const EditEmployeeForm = ({ employee, onUpdate }) => {
  const [name, setName] = useState(employee.name);
  const [surname, setSurname] = useState(employee.surname);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedEmployee = await updateEmployee(employee.id, { name, position });
      onUpdate(updatedEmployee);
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  return (
    <div>
      <h2>Edit Employee</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          required
        />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditEmployeeForm;
