import { create } from 'zustand';
import axios from 'axios';

const API_URL = process.env.VITE_API_URL;

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, fullName: string, role: string) => Promise<void>;
  signOut: () => void;
}

// Check if we have a token in localStorage
const storedToken = localStorage.getItem('auth_token');
const storedUser = localStorage.getItem('auth_user');

export const useAuthStore = create<AuthState>((set) => ({
  user: storedUser ? JSON.parse(storedUser) : null,
  token: storedToken,
  loading: false,
  signIn: async (email: string, password: string) => {
    try {
      set({ loading: true });
      const response = await axios.post(`${API_URL}/api/auth/login`, { email, password });
      
      const { token, user } = response.data;
      
      // Store token in localStorage
      localStorage.setItem('auth_token', token);
      localStorage.setItem('auth_user', JSON.stringify(user));
      
      // Set auth header for future requests
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      
      set({ 
        user, 
        token, 
        loading: false 
      });
    } catch (error) {
      set({ loading: false });
      console.error('Login error:', error);
      throw error;
    }
  },
  signUp: async (email: string, password: string, fullName: string, role: string) => {
    try {
      set({ loading: true });
      await axios.post(`${API_URL}/api/auth/signup`, { 
        email, 
        password, 
        name: fullName, 
        role 
      });
      set({ loading: false });
    } catch (error) {
      set({ loading: false });
      console.error('Signup error:', error);
      throw error;
    }
  },
  signOut: () => {
    // Clear localStorage
    localStorage.removeItem('auth_token');
    localStorage.removeItem('auth_user');
    
    // Remove auth header
    delete axios.defaults.headers.common['Authorization'];
    
    set({ user: null, token: null });
  },
}));