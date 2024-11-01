import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';

const CreateAccount = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:5000/users", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });
  
      const textResponse = await response.text(); // Get the raw response text
      console.log(textResponse); // Log the response for debugging
  
      if (!response.ok) {
        throw new Error('Failed to create account');
      }
  
      // Parse as JSON if response is OK
      const data = JSON.parse(textResponse);
      onLogin(username);
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };
  

  const handleAutoFill = () => {
    setUsername('testuser');
    setEmail('testuser@example.com');
    setPassword('password123');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r bg-gray-100">
      <h2 className="text-4xl font-bold mb-6 text-black">Create Your Account</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-96 space-y-4">
        <div className="relative">
          <label className="block mb-1 text-sm font-medium text-gray-700">Username:</label>
          <div className="absolute inset-y-0 left-0 flex items-center pl-3" style={{ top: '20px' }}>
            <FiUser className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="border border-gray-300 p-2 pl-10 rounded w-full focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>
        <div className="relative">
          <label className="block mb-1 text-sm font-medium text-gray-700">Email:</label>
          <div className="absolute inset-y-0 left-0 flex items-center pl-3" style={{ top: '20px' }}>
            <FiMail className="text-gray-400" />
          </div>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border border-gray-300 p-2 pl-10 rounded w-full focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>
        <div className="relative">
          <label className="block mb-1 text-sm font-medium text-gray-700">Password:</label>
          <div className="absolute inset-y-0 left-0 flex items-center pl-3" style={{ top: '20px' }}>
            <FiLock className="text-gray-400" />
          </div>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border border-gray-300 p-2 pl-10 rounded w-full focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>
        <button 
          type="submit" 
          className="bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600 w-full transition duration-200">
          Create Account
        </button>
        <button
          type="button"
          onClick={handleAutoFill}
          className="bg-gray-300 text-gray-700 font-bold py-2 rounded hover:bg-gray-400 w-full transition duration-200"
        >
          Auto Fill for Testing
        </button>
      </form>
    </div>
  );
};

export default CreateAccount;
