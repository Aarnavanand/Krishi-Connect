import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { useTheme } from '../context/ThemeContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { isDarkMode } = useTheme();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`min-h-screen transition-colors duration-200 
      ${isDarkMode ? 'bg-deep-charcoal' : 'bg-soft-white'}`}>
      <Navbar toggleSidebar={toggleSidebar} />
      
      <div className="flex">
        <Sidebar isOpen={isSidebarOpen} className={`fixed sm:relative z-10
          transform transition-transform duration-300
          ${isSidebarOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}
          ${isDarkMode ? 'bg-dark-earth-brown' : 'bg-golden-beige'}
          sm:w-64 w-full h-full sm:h-auto`} />
        
        <main className={`flex-1 transition-all duration-300 pt-16
          ${isSidebarOpen ? 'ml-0 sm:ml-64' : 'ml-0'}
          ${isDarkMode ? 'text-soft-white' : 'text-dark-gray'}`}>
          <div className="container mx-auto p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
