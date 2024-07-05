import React, { useState } from 'react';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';

function UsersPage() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div className="users-page">
      <h2>Manage Users</h2>
      <UserForm addUser={addUser} />
      <UserList users={users} />
    </div>
  );
}

export default UsersPage;
