import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeSwitcherProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ isDarkMode, toggleTheme }) => {
  return (
    <button onClick={toggleTheme} className={`flex items-center p-2 rounded transition duration-200 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200 hover:bg-gray-300'}`}>
      {isDarkMode ? <Sun className="w-5 h-5 mr-2 text-yellow-400" /> : <Moon className="w-5 h-5 mr-2 text-gray-800" />}
      {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
};

export default ThemeSwitcher; 