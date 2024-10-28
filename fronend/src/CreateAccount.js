// src/CreateAccount.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiUser, FiMail, FiLock } from 'react-icons/fi'; // Importing icons for username, email, and password

const CreateAccount = ({ onLogin }) => {
  const [username, setUsername] = useState(''); // State for username input
  const [email, setEmail] = useState(''); // State for email input
  const [password, setPassword] = useState(''); // State for password input
  const navigate = useNavigate(); // Hook to programmatically navigate

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Here you would typically handle the account creation logic,
    // such as sending the data to your server or API.

    // For demonstration purposes, we'll just call onLogin with the username
    onLogin(username); // Simulating login after account creation
    navigate('/'); // Redirect to the home page after account creation
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r bg-gray-100">
      <h2 className="text-4xl font-bold mb-6 text-black">Create Your Account</h2>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-96 space-y-4">
        <div className="relative">
          <label className="block mb-1 text-sm font-medium text-gray-700">Username:</label>
          {/* Icon container for username */}
          <div className="absolute inset-y-0 left-0 flex items-center pl-3" style={{ top: '20px' }}> {/* Adjust the top property to move icon down */}
            <FiUser className="text-gray-400" /> {/* Username icon */}
          </div>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Update username state
            required
            className="border border-gray-300 p-2 pl-10 rounded w-full focus:outline-none focus:ring focus:ring-blue-400" // Added padding for icon
          />
        </div>
        <div className="relative">
          <label className="block mb-1 text-sm font-medium text-gray-700">Email:</label>
          {/* Icon container for email */}
          <div className="absolute inset-y-0 left-0 flex items-center pl-3" style={{ top: '20px' }}> {/* Adjust the top property to move icon down */}
            <FiMail className="text-gray-400" /> {/* Email icon */}
          </div>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email state
            required
            className="border border-gray-300 p-2 pl-10 rounded w-full focus:outline-none focus:ring focus:ring-blue-400" // Added padding for icon
          />
        </div>
        <div className="relative">
          <label className="block mb-1 text-sm font-medium text-gray-700">Password:</label>
          {/* Icon container for password */}
          <div className="absolute inset-y-0 left-0 flex items-center pl-3" style={{ top: '20px' }}> {/* Adjust the top property to move icon down */}
            <FiLock className="text-gray-400" /> {/* Password icon */}
          </div>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update password state
            required
            className="border border-gray-300 p-2 pl-10 rounded w-full focus:outline-none focus:ring focus:ring-blue-400" // Added padding for icon
          />
        </div>
        <button 
          type="submit" 
          className="bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600 w-full transition duration-200">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default CreateAccount;
