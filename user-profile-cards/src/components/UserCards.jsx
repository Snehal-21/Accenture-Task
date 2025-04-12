import React from "react";
import { FaUserCircle } from "react-icons/fa";

function UserCard({ user }) {
  return (
    <div className="bg-white p-6 rounded-2xl border shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center">
      {/* <div className="text-6xl mb-4">👤</div> */}
      <FaUserCircle className="text-6xl text-gray-400 mb-4" />
      <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
      <p className="text-gray-600">{user.role}</p>
      <p className="text-gray-500 text-sm mb-4">{user.location}</p>
      <button className="mt-auto bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-5 py-2 rounded-full shadow-md transition">
        Contact
      </button>
    </div>
  );
}

export default UserCard;
