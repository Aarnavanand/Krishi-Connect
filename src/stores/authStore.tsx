import { createContext, useContext, useState } from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/auth'; // Default to localhost for development

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signIn = async (email, password, rememberMe) => {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    if (response.data) {
      localStorage.setItem('auth_token', response.data.token);
      setUser(response.data.user);
    }
    return response.data;
  };

  const signUp = async (email, password, fullName, role) => {
    const response = await axios.post(`${API_URL}/register`, { email, password, fullName, role });
    return response.data;
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthStore = () => useContext(AuthContext);
