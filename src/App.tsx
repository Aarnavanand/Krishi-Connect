import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Marketplace from './pages/Marketplace';
import Weather from './pages/Weather';
import CropAnalysis from './pages/CropAnalysis';
import Auth from './pages/Auth';
import AgroNews from './pages/AgroNews';
import ContactUs from './pages/contactUS';
import LandingPage from './pages/LandingPage';
import { useAuthStore } from './stores/authStore';
import { ThemeProvider } from './context/ThemeContext';
import axios from 'axios';
import { useEffect } from 'react';
// Set up axios interceptor for authentication
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

function App() {
  const { user } = useAuthStore();
  const isAuthenticated = !!user;

  // Initialize auth header when app loads
  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<Auth />} />
          
          {/* Authenticated Routes */}
          {isAuthenticated ? (
            <Route path="/*" element={
              <Layout>
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/marketplace" element={<Marketplace />} />
                  <Route path="/weather" element={<Weather />} />
                  <Route path="/crop-analysis" element={<CropAnalysis />} />
                  <Route path="/agro-news" element={<AgroNews />} />
                  <Route path="/contactUS" element={<ContactUs />} />
                  <Route path="*" element={<Navigate to="/dashboard" replace />} />
                </Routes>
              </Layout>
            } />
          ) : (
            <Route path="*" element={<Navigate to="/" replace />} />
          )}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;