import React, { createContext, useContext, useState, useMemo, useEffect } from 'react';

// Set up the AuthContext
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      // Check for stored user data in localStorage
      const user = localStorage.getItem('currentUser');
      return user ? JSON.parse(user) : null;
    } catch (error) {
      console.error('Error parsing user data:', error);
      return null;
    }
  });

  const [error, setError] = useState(null); // State to hold login errors

  useEffect(() => {
    console.log('Current User:', currentUser);
  }, [currentUser]);

  // Function to log in the user
  const login = async (email, password) => {
    setError(null); // Reset error on new login attempt
    try {
      const response = await fetch('http://localhost:5000/api/users', {  // Updated API URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Login failed. Please check your credentials.');
      }

      const userData = await response.json();
      // Store the user data in localStorage and set it in state
      localStorage.setItem('currentUser', JSON.stringify(userData));
      setCurrentUser(userData);
    } catch (error) {
      setError(error.message);  // Set error message in state
      console.error(error.message);
    }
  };

  // Function to log out the user
  const logout = () => {
    // Remove user data from localStorage and reset state
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
  };

  // Memoize the context value to avoid unnecessary re-renders
  const contextValue = useMemo(() => ({
    currentUser,
    login,
    logout,
    isAdmin: currentUser?.role === 'admin', // Check if the current user is an admin
    error, // Include the error state in context
  }), [currentUser, error]);

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access the AuthContext
export const useAuth = () => useContext(AuthContext);
