import React, { useState } from 'react';


function ChatList() {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Johnson' },
    { id: 4, name: 'Bob Williams' },
    // Add more users as needed
  ]);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-semibold mb-6">User Chat History</h1>
      
      {/* List */}

    <div className="overflow-y-auto max-h-96">
      <ul className="space-y-4">
        {users.map(user => (
          <li key={user.id} className="flex items-center p-4 border rounded-md hover:bg-gray-100 transition duration-400">
            <div className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center text-white text-lg">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <span className="text-base font-semibold ml-3">{user.name}</span>
          </li>
        ))}
      </ul>
    </div>


    </div>
  );
}

export default ChatList;
