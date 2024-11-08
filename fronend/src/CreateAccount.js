import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import { useAuth } from './AuthContext';
import Footer from './Footer';

const CreateAccount = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(''); // Clear any previous errors

    // Basic validation
    if (!email || !password || !username) {
      setError("All fields are required.");
      setLoading(false);
      return;
    }

    try {
      // Create user request
      const createResponse = await fetch("http://localhost:5000/api/users", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });

      if (!createResponse.ok) {
        const errorMessage = await createResponse.json();
        throw new Error(`Failed to create account: ${errorMessage.error || 'Unknown error'}`);
      }

      // Log in after account creation
      const loginResponse = await fetch("http://localhost:5000/api/login", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!loginResponse.ok) {
        const errorMessage = await loginResponse.json();
        setError(`Login failed: ${errorMessage.error || 'Unknown error'}`);
        return;
      }

      const loginData = await loginResponse.json();
      login(loginData.user);
      navigate('/');  // Redirect after login
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAutoFill = () => {
    setUsername('testuser');
    setEmail('testuser@example.com');
    setPassword('password123');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex flex-col items-center justify-center bg-gray-100">
        <h2 className="text-4xl font-bold mb-6 text-black">Create Your Account</h2>
        {error && <div className="bg-red-100 text-red-700 p-4 rounded mb-4 w-full max-w-md text-center">{error}</div>}
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md space-y-4">
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
            <div className="absolute inset-y-0 left-0 flex items-center pl-3" style={{ top: '4px' }}>
              <FiLock className="text-gray-400" />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border border-gray-300 p-2 pl-10 rounded w-full focus:outline-none focus:ring focus:ring-blue-400"
            />
            <div className="flex items-center mt-2">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
                className="mr-2"
              />
              <span className="text-sm text-gray-600">Show Password</span>
            </div>
          </div>
          <button 
            type="submit" 
            disabled={loading}
            className="bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600 w-full transition duration-200"
          >
            {loading ? 'Creating Account...' : 'Create Account'}
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
      <Footer />
    </div>
  );
};

export default CreateAccount;
