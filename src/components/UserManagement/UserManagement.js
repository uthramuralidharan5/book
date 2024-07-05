// src/components/UserManagement/UserManagement.js

import React, { useState, useEffect } from 'react';
import UserList from './UserList';
import AddUser from './AddUser';
import EditUser from './EditUser';
import SearchUser from './SearchUser';
import { fetchUsers, addUser, updateUser, deleteUser, searchUsers } from '../../services/apiServices.js';
import Loader from '../common/Loader';

function UserManagement() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = async () => {
    setLoading(true);
    try {
      const data = await fetchUsers();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddUser = async (user) => {
    setLoading(true);
    try {
      await addUser(user);
      fetchAllUsers();
    } catch (error) {
      console.error('Error adding user:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateUser = async (user) => {
    setLoading(true);
    try {
      await updateUser(user);
      fetchAllUsers();
      setEditingUser(null);
    } catch (error) {
      console.error('Error updating user:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async (id) => {
    setLoading(true);
    try {
      await deleteUser(id);
      fetchAllUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchUser = async (query) => {
    setLoading(true);
    try {
      const data = await searchUsers(query);
      setUsers(data);
    } catch (error) {
      console.error('Error searching users:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchUser onSearch={handleSearchUser} />
      {loading ? (
        <Loader />
      ) : (
        <>
          <UserList users={users} onEdit={setEditingUser} onDelete={handleDeleteUser} />
          {editingUser ? (
            <EditUser user={editingUser} onUpdate={handleUpdateUser} onCancel={() => setEditingUser(null)} />
          ) : (
            <AddUser onAdd={handleAddUser} />
          )}
        </>
      )}
    </div>
  );
}

export default UserManagement;
