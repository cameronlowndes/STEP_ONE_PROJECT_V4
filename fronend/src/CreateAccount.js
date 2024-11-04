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
      // Attempt to create a user account
      const createResponse = await fetch("http://localhost:5000/api/users", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      // Check if the account creation was successful
      if (!createResponse.ok) {
        const errorMessage = await createResponse.text();
        throw new Error(`Failed to create account: ${errorMessage}`);
      }

      // Optionally, you can parse the response if you need to handle it
      const userData = await createResponse.json();

      // Now log in the user with email and password using the same endpoint
      const loginResponse = await fetch("http://localhost:5000/api/users/login", {
        method: 'POST', // Use POST to log in, since the same endpoint is used
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }), // Send email and password for login
      });

      // Check if the login response is not okay
      if (!loginResponse.ok) {
        const errorMessage = await loginResponse.text();
        console.error(`Login failed: ${errorMessage}`);
        setError(`Login failed: ${errorMessage}`); // Display error message to the user
        return; // Exit early if login fails
      }

      // Parse the login response JSON if successful
      const loginData = await loginResponse.json();

      // Call onLogin to handle token storage and user data
      onLogin(loginData.token); 
      navigate('/'); // Redirect to home or dashboard
    } catch (error) {
      console.error("Error:", error.message);
      setError(error.message); // Display error message to the user
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
        {/* Username input */}
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
        {/* Email input */}
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
        {/* Password input */}
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
