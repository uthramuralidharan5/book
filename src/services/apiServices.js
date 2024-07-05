// src/services/apiService.js

const BASE_URL = 'http://localhost:3000/api'; // Ensure this URL is correct

async function fetchUsers() {
  const response = await fetch(`${BASE_URL}/users`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

async function addUser(user) {
  const response = await fetch(`${BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

async function updateUser(user) {
  const response = await fetch(`${BASE_URL}/users/${user.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

async function deleteUser(id) {
  const response = await fetch(`${BASE_URL}/users/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

async function searchUsers(query) {
  const response = await fetch(`${BASE_URL}/users?search=${query}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

export {
  fetchUsers,
  addUser,
  updateUser,
  deleteUser,
  searchUsers,
};
