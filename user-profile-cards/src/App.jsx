import React, { useState } from "react";
import UserCard from "./components/UserCards.jsx";
import './index.css';
import { FaUserCircle } from "react-icons/fa";
import {usersData} from "./data/Users.js"

console.log(usersData,"usersData")
const usersData1 = [
  { id: 1, name: "Alice", role: "Frontend Developer", location: "Delhi" },
  { id: 2, name: "Bob", role: "Backend Developer", location: "Mumbai" },
  { id: 3, name: "Carol", role: "Full Stack Developer", location: "Remote" },
  { id: 4, name: "David", role: "DevOps Engineer", location: "Pune" },
];

function App() {
  const [search, setSearch] = useState("");

  const filteredUsers = usersData.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 border">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800 flex items-center justify-center gap-3">
          <span role="img" aria-label="avatar">  
            <FaUserCircle className="text-6xl text-gray-400" />
          </span> User Profiles
        </h1>

        <div className="w-[400px] my-4 ml-auto">
          <input
            type="text"
            placeholder="Search by name or role..."
            className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {filteredUsers.length > 0 ? (
        <div className=" grid gap-6 grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4">
        {filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
      
        ) : (
          <p className="text-center text-gray-500">No users to display.</p>
        )}
      </div>
    </div>
  );
}

export default App;
