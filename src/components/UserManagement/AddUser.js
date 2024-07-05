// src/components/UserManagement/AddUser.js
import React, { useState } from 'react';

function AddUser({ fetchUsers }) {
  const [name, setName] = useState('');
  const [role, setRole] = useState('patron');

  const handleAddUser = async (e) => {
    e.preventDefault();
    // API call to add user
    await fetchUsers('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, role }),
    });
    fetchUsers();
    setName('');
    setRole('patron');
  };

  return (
    <form onSubmit={handleAddUser}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="patron">Patron</option>
        <option value="librarian">Librarian</option>
      </select>
      <button type="submit">Add User</button>
    </form>
  );
}

export default AddUser;
