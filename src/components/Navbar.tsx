import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const location = useLocation();

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={`fixed w-full z-50 px-4 py-2.5 transition-colors duration-200 
      ${isDarkMode 
        ? 'bg-dark-earth-brown border-muted-olive' 
        : 'bg-golden-beige border-muted-green'} 
      border-b`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <button
            onClick={toggleSidebar}
            className={`p-2 rounded-lg hover:bg-opacity-80 transition-colors
              ${isDarkMode 
                ? 'text-soft-white hover:bg-muted-olive' 
                : 'text-dark-gray hover:bg-muted-green'}`}
          >
            <Menu size={24} />
          </button>
          <Link to="/" className="flex items-center ml-4">
            <span className={`text-2xl font-bold 
              ${isDarkMode ? 'text-soft-white' : 'text-dark-gray'}`}>
              FDSS
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-colors
              ${isDarkMode 
                ? 'bg-muted-olive text-soft-white hover:bg-opacity-80' 
                : 'bg-muted-green text-dark-gray hover:bg-opacity-80'}`}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
