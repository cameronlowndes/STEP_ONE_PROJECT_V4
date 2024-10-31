// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';
import { useAuth } from './AuthContext';

const Login = () => {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        if (email === '' || password === '') {
            setError('Please enter both email and password');
            setSuccess('');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/users', { // Update with your backend URL
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error('Invalid email or password');
            }

            const user = await response.json();
            login(user);
            setSuccess('Successfully logged in!');
            setTimeout(() => {
                navigate('/'); 
            }, 1000);
        } catch (err) {
            setError(err.message);
            setSuccess('');
        }
    };

    // Function to auto-login as admin
    const handleAdminLogin = () => {
        setEmail('admin1@example.com'); // Replace with actual admin email
        setPassword('admin123');  // Replace with actual admin password
        handleLogin({ preventDefault: () => {} }); // Call the login function
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-4xl font-bold text-center text-gray-800">Login</h2>
                {error && <p className="text-red-500 text-center">{error}</p>}
                {success && <p className="text-green-500 text-center">{success}</p>}
                <form onSubmit={handleLogin} className="space-y-4">
                    <div className="relative">
                        <label className="block mb-1 text-sm font-medium text-gray-700">Email:</label>
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3" style={{ top: '20px' }}>
                            <FiMail className="text-gray-400" />
                        </div>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full pl-10 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-400"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="relative">
                        <label className="block mb-1 text-sm font-medium text-gray-700">Password:</label>
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3" style={{ top: '20px' }}>
                            <FiLock className="text-gray-400" />
                        </div>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full pl-10 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-400"
                            placeholder="Enter your password"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-0 flex items-center pr-3"
                        >
                            {showPassword ? <FiEyeOff className="text-gray-400" /> : <FiEye className="text-gray-400" />}
                        </button>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 font-semibold text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
                    >
                        Login
                    </button>
                </form>
                <button
                    type="button"
                    onClick={handleAdminLogin}
                    className="w-full py-2 font-semibold text-white bg-green-600 rounded hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-300"
                >
                    Auto Login as Admin
                </button>
            </div>
        </div>
    );
};

export default Login;
