import React, { useState } from 'react';
import { useAuth } from './AuthContext'; // Adjust the import based on your file structure
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Login = () => {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleLogin = (e) => {
        e.preventDefault();
        
        // Hardcoded credentials for testing
        const adminCredentials = { email: 'admin@example.com', password: 'admin123' };
        const userCredentials = { email: 'user@example.com', password: 'user123' };

        if ((email === adminCredentials.email && password === adminCredentials.password) || 
            (email === userCredentials.email && password === userCredentials.password)) {
            login({ email, role: email === adminCredentials.email ? 'admin' : 'user' });
            navigate('/'); // Navigate to the home page
        } else {
            setError('Invalid email or password');
        }
    };

    // Function to auto-login as admin
    const handleAutoLogin = () => {
        login({ email: 'admin@example.com', role: 'admin' });
        navigate('/'); // Navigate to the home page after auto-login
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-4xl font-bold text-center">Test Login</h2>
                {error && <p className="text-red-500 text-center">{error}</p>}
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block mb-1 text-sm font-medium">Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-sm font-medium">Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 font-semibold text-white bg-blue-600 rounded hover:bg-blue-700"
                    >
                        Login
                    </button>
                </form>
                <button
                    onClick={handleAutoLogin}
                    className="mt-4 w-full py-2 font-semibold text-white bg-green-600 rounded hover:bg-green-700"
                >
                    Auto Login as Admin
                </button>
            </div>
        </div>
    );
};

export default Login;
