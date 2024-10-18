// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi'; // Import eye icons
import { useAuth } from './AuthContext'; // Import useAuth

const Login = () => {
    const { login } = useAuth(); // Get login function from context
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false); // State for password visibility
    const navigate = useNavigate();

    // Test credentials for demonstration purposes
    const TEST_EMAIL = 'admin@example.com';
    const TEST_PASSWORD = 'adminpassword';
    const TEST_ROLE = 'admin'; // Assume this comes from your authentication logic

    const handleLogin = (e) => {
        e.preventDefault();
        if (email === '' || password === '') {
            setError('Please enter both email and password');
            setSuccess('');
            return;
        }

        if (email === TEST_EMAIL && password === TEST_PASSWORD) {
            const username = email.split('@')[0];
            // Create user object and pass it to login function
            const user = { username, email, role: TEST_ROLE }; 
            login(user); // Call login function with user object
            setSuccess('Successfully logged in!');
            setTimeout(() => {
                navigate('/'); // Redirect to home page after a brief moment
            }, 1000);
        } else {
            setError('Invalid email or password. Please try again.');
            setSuccess('');
        }
    };

    // Function to log in as admin for testing
    const loginAsAdmin = () => {
        setEmail(TEST_EMAIL);
        setPassword(TEST_PASSWORD);
        handleLogin({ preventDefault: () => {} }); // Call handleLogin without the event
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
                            type={showPassword ? 'text' : 'password'} // Toggle between text and password
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full pl-10 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-400"
                            placeholder="Enter your password"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
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
                    onClick={loginAsAdmin} // Call the login function for admin
                    className="w-full py-2 font-semibold text-white bg-green-600 rounded hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-300"
                >
                    Login as Admin
                </button>
            </div>
        </div>
    );
};

export default Login;
