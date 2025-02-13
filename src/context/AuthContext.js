import React, { createContext, useState, useEffect } from 'react';
import { getToken, logoutUser } from '../services/auth';
import { jwtDecode } from 'jwt-decode';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = getToken();
    if (token) {
      const decoded = jwtDecode(token);
      setUser({ email: decoded.email, role: decoded.role });
    }
  }, []);

  const logout = () => {
    logoutUser();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
