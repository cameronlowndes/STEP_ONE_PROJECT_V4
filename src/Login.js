// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiMail, FiLock } from 'react-icons/fi'; // Importing icons for email and password

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState(''); // State for email input
  const [password, setPassword] = useState(''); // State for password input
  const [error, setError] = useState(''); // State for error messages
  const navigate = useNavigate(); // Hook to programmatically navigate

  // Define test account credentials
  const TEST_EMAIL = 'test@example.com';
  const TEST_PASSWORD = 'password123'; // Simple password for testing

  // Handle login form submission
  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (email === '' || password === '') {
      setError('Please enter both email and password'); // Error if fields are empty
      return;
    }

    // Check credentials against the test account
    if (email === TEST_EMAIL && password === TEST_PASSWORD) {
      const username = email.split('@')[0]; // Use email before "@" as username
      console.log('Logging in with:', { email, password });
      setError(''); // Clear any previous errors
      onLogin(username); // Call the onLogin prop with the username
      navigate('/'); // Redirect to home page
    } else {
      setError('Invalid email or password. Please try again.'); // Error for incorrect credentials
    }
  };

  // Automatically log in with the test account
  const handleTestLogin = () => {
    const username = TEST_EMAIL.split('@')[0]; // Use email before "@" as username
    console.log('Automatically logging in with test account:', { email: TEST_EMAIL, password: TEST_PASSWORD });
    setError(''); // Clear any previous errors
    onLogin(username); // Call the onLogin prop with the username
    navigate('/'); // Redirect to home page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-center text-gray-800">Login</h2>
        {error && <p className="text-red-500 text-center">{error}</p>} {/* Display error message if exists */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="relative">
            <label className="block mb-1 text-sm font-medium text-gray-700">Email:</label>
            {/* Icon container for email */}
            <div className="absolute inset-y-0 left-0 flex items-center pl-3" style={{ top: '20px' }}> {/* Adjust the top property to move icon down */}
              <FiMail className="text-gray-400" /> {/* Email icon */}
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state
              required
              className="w-full pl-10 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-400"
              placeholder="Enter your email" // Placeholder text
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
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state
              required
              className="w-full pl-10 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-400"
              placeholder="Enter your password" // Placeholder text
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 font-semibold text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Login
          </button>
        </form>
        {/* Button for auto-login with test account */}
        <button
          onClick={handleTestLogin}
          className="w-full py-2 mt-4 font-semibold text-white bg-green-600 rounded hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-300"
        >
          Auto Login (Test Account)
        </button>
      </div>
    </div>
  );
};

export default Login;
