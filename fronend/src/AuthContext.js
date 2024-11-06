import React, { createContext, useContext, useState, useMemo, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const user = localStorage.getItem('currentUser');
      return user ? JSON.parse(user) : null;
    } catch (error) {
      console.error('Error parsing user data:', error);
      return null;
    }
  });

  useEffect(() => {
    console.log('Current User:', currentUser);
  }, [currentUser]);

  const login = (user) => {
    if (user?.email && user?.role) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      setCurrentUser(user);
    }
  };

  const logout = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
  };

  const contextValue = useMemo(() => ({
    currentUser,
    login,
    logout,
    isAdmin: currentUser?.role === 'admin',
  }), [currentUser]);

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
