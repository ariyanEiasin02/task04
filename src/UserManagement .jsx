import React, { useState } from 'react';

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', lastLogin: '2024-09-14', registrationTime: '2024-01-12', status: 'active' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', lastLogin: '2024-09-13', registrationTime: '2024-02-10', status: 'blocked' },
    { id: 3, name: 'Alice Smith', email: 'alice@example.com', lastLogin: '2024-09-12', registrationTime: '2024-03-05', status: 'active' },
  ]);

  const handleBlock = (id) => {
    setUsers(users.map(user => user.id === id ? { ...user, status: 'blocked' } : user));
  };

  const handleUnblock = (id) => {
    setUsers(users.map(user => user.id === id ? { ...user, status: 'active' } : user));
  };

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2">
                <input type="checkbox" />
              </th>
              <th className="p-2">ID</th>
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Last Login</th>
              <th className="p-2">Registration Time</th>
              <th className="p-2">Status</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} className="border-b">
                <td className="p-2 text-center">
                  <input type="checkbox" />
                </td>
                <td className="p-2 text-center">{user.id}</td>
                <td className="p-2">{user.name}</td>
                <td className="p-2">{user.email}</td>
                <td className="p-2">{user.lastLogin}</td>
                <td className="p-2">{user.registrationTime}</td>
                <td className={`p-2 ${user.status === 'blocked' ? 'text-red-500' : 'text-green-500'}`}>
                  {user.status}
                </td>
                <td className="p-2">
                  <button
                    className="text-white bg-red-500 px-2 py-1 mr-2"
                    onClick={() => handleBlock(user.id)}
                  >
                    Block
                  </button>
                  <button
                    className="text-white bg-blue-500 px-2 py-1 mr-2"
                    onClick={() => handleUnblock(user.id)}
                  >
                    Unblock
                  </button>
                  <button
                    className="text-white bg-gray-500 px-2 py-1"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
