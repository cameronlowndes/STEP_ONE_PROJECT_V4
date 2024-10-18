// src/components/AuthContext.js
import React, { createContext, useContext, useState } from 'react';

// Create AuthContext
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null); // Manage the current user state

  // Function to log in the user
  const login = (user) => {
    setCurrentUser(user);
  };

  // Function to log out the user
  const logout = () => {
    setCurrentUser(null);
  };

  // Determine if the current user is an admin
  const isAdmin = currentUser && currentUser.role === 'admin'; // Modify this as per your logic

  return (
    <AuthContext.Provider value={{ currentUser, login, logout, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
