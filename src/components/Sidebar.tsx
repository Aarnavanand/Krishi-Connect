import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingBag, CloudSun, BarChart2, Newspaper, Sprout, LogOut, Mail } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useAuthStore } from '../stores/authStore';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuthStore();
  const { isDarkMode } = useTheme();

  const menuItems = [
    { path: '/dashboard', icon: BarChart2, label: 'Dashboard' },
    { path: '/marketplace', icon: ShoppingBag, label: 'Marketplace' },
    { path: '/weather', icon: CloudSun, label: 'Weather' },
    { path: '/agro-news', icon: Newspaper, label: 'AgroNews' },
    { path: '/crop-analysis', icon: Sprout, label: 'Crop Analysis' },
    { path: '/contactUS', icon: Mail, label: 'Contact Us' },
  ];

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  if (!isOpen) return null;

  return (
    <aside className={`fixed left-0 top-0 h-screen w-64 transition-colors duration-200 pt-16
      ${isDarkMode 
        ? 'bg-dark-earth-brown border-muted-olive' 
        : 'bg-golden-beige border-muted-green'}
      border-r`}>
      <div className="flex flex-col justify-between h-full p-4">
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = isActiveRoute(item.path);
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
                  ${isActive 
                    ? isDarkMode 
                      ? 'bg-neon-green text-dark-earth-brown' 
                      : 'bg-farm-green text-white'
                    : isDarkMode
                      ? 'text-soft-white hover:bg-muted-olive' 
                      : 'text-dark-gray hover:bg-muted-green'}`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="mt-6 border-t border-muted-olive pt-4">
          <div className={`px-4 py-3 rounded-lg mb-4 ${isDarkMode ? 'bg-dark-earth-brown' : 'bg-muted-green'}`}>
            <p className={`text-sm font-medium ${isDarkMode ? 'text-soft-white' : 'text-dark-gray'}`}>Signed in as</p>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} truncate`}>{user?.email}</p>
          </div>
          <div className="flex">
            <button
              onClick={handleSignOut}
              className={`flex-1 flex items-center justify-center space-x-2 px-4 py-2 rounded-lg transition-colors
                ${isDarkMode 
                  ? 'bg-red-900/20 text-red-400 hover:bg-red-900/30' 
                  : 'bg-red-50 text-red-700 hover:bg-red-100'}`}
            >
              <LogOut className="w-4 h-4" />
              <span className="text-sm">Sign Out</span>
            </button>
            
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
