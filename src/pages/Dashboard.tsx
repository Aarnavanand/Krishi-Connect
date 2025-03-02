import React, { useState } from 'react';
import { Info, ShoppingBag,  User, Mail, Calendar, Briefcase  } from 'lucide-react';
import { useAuthStore } from "../stores/authStore";
import { useTheme } from "../context/ThemeContext";
const Dashboard: React.FC = () => {
  const { user } = useAuthStore();
  const { isDarkMode } = useTheme();
  const [newsIndex, setNewsIndex] = useState(0);
  const [marketPrices, setMarketPrices] = useState([
    { name: "Wheat", price: "₹2,100/quintal" },
    { name: "Rice", price: "₹1,950/quintal" },
    { name: "Corn", price: "₹1,800/quintal" }
    
  ]);
  
  const newsItems = [
    "New Government Scheme Announced",
    "Market Trends: Rising demand for pulses in local markets",
    "Weather Alert: Heavy rains expected next week",
    "New Agricultural Technology Expo",
    "Farmers' Income Support Program Launched",
    "Organic Farming Workshop Scheduled",
    "Increase in Crop Yields Reported",
    "New Pest Control Measures",
    "Water Conservation Techniques",
    "Agricultural Export Opportunities"
  ];

  return (
    <div className="space-y-8 px-6 py-12">
      {/* Header Section */}
      <section className={`text-center py-12 rounded-lg shadow-xl text-white transition-all duration-300 ${isDarkMode ? 'bg-gradient-to-r from-neon-green to-warm-amber' : 'bg-gradient-to-r from-farm-green to-harvest-orange'}`}>
        <h1 className="text-4xl font-bold mb-4">Krishi Connect</h1>
        <p className="text-xl">Empowering farmers with real-time data and insights</p>
      </section>

      {/* Cards Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
        {/* Profile Card */}
        <div className={`p-6 rounded-2xl shadow-lg transition-all duration-300 relative overflow-hidden ${isDarkMode ? 'bg-gradient-to-br from-dark-earth-brown to-gray-800 text-light-gray' : 'bg-gradient-to-br from-golden-beige to-yellow-200 text-earth-brown'}`}>
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-bl-full"></div>

          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <User className={`w-6 h-6 ${isDarkMode ? 'text-neon-green' : 'text-farm-green'}`} />
            Your Profile
          </h2>

          {/* Profile Avatar */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-full flex items-center justify-center font-semibold text-xl uppercase shadow-md" 
              style={{ backgroundColor: isDarkMode ? "#1a202c" : "#fcd34d", color: isDarkMode ? "#90ee90" : "#92400e" }}>
              {user?.name ? user.name[0] : "U"}
            </div>
            <div>
              <p className="text-lg font-medium">{user?.name || "User Name"}</p>
              <p className="text-sm text-gray-400">{user?.email}</p>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className={`w-5 h-5 ${isDarkMode ? 'text-warm-amber' : 'text-harvest-orange'}`} />
              <p>
                <span className="font-medium">Email:</span> {user?.email || "Not provided"}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Briefcase className={`w-5 h-5 ${isDarkMode ? 'text-warm-amber' : 'text-harvest-orange'}`} />
              <p>
                <span className="font-medium">Role:</span> {user?.role || "Farmer"}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Calendar className={`w-5 h-5 ${isDarkMode ? 'text-warm-amber' : 'text-harvest-orange'}`} />
              <p>
                <span className="font-medium">Member since:</span> {
                  user?.createdAt 
                    ? new Date(user.createdAt).toLocaleDateString() 
                    : new Date().toLocaleDateString()
                }
              </p>
            </div>
          </div>
        </div>

        {/* Market Prices Card */}
        <div className={`p-6 rounded-2xl shadow-lg transition-all duration-300 relative overflow-hidden ${isDarkMode ? 'bg-gradient-to-br from-dark-earth-brown to-gray-800 text-light-gray' : 'bg-gradient-to-br from-golden-beige to-yellow-200 text-earth-brown'}`}>
  {/* Decorative Background */}
  <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-bl-full"></div>

  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
    <ShoppingBag className={`w-7 h-7 ${isDarkMode ? 'text-neon-green' : 'text-farm-green'}`} />
    Latest Market Prices
  </h2>

  {/* Market Prices List */}
        <div className="space-y-4">
          {marketPrices.map((item, index) => (
            <div key={index} className="flex justify-between items-center text-lg px-4 py-3 rounded-lg shadow-sm"
                style={{
                  backgroundColor: isDarkMode ? "#1a202c" : "#fcd34d",
                  color: isDarkMode ? "#90ee90" : "#92400e",
                }}>
                <span className="font-medium">{item.name}</span>
                <span className="font-semibold">{item.price}</span>
              </div>
            ))}
          </div>
      </div>


        {/* Latest News Card */}
      </div>
      <div className={`relative p-6 rounded-2xl shadow-lg transition-all duration-300 overflow-hidden ${isDarkMode ? 'bg-gradient-to-br from-dark-earth-brown to-gray-800 text-light-gray' : 'bg-gradient-to-br from-golden-beige to-yellow-200 text-earth-brown'}`}>
          {/* Decorative Overlay */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-bl-full"></div>

          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Info className={`w-7 h-7 ${isDarkMode ? 'text-neon-green' : 'text-farm-green'}`} />
            Latest News
          </h2>

          {/* Scrolling News Section */}
          <div className="relative h-40 overflow-hidden">
            <div
              className="space-y-4 transition-transform duration-700 ease-in-out hover:pause"
              style={{
                transform: `translateY(-${newsIndex * 10}%)`,
              }}>
              {newsItems.map((news, index) => (
                <div
                  key={index}
                  className="p-4 text-lg font-medium rounded-lg shadow-md transition-all duration-300"
                  style={{
                    backgroundColor: isDarkMode ? "#1a202c" : "#fcd34d",
                    color: isDarkMode ? "#90ee90" : "#92400e",
                  }}>
                  {news}
                </div>
              ))}
            </div>
          </div>
        </div>

    </div>
  );
};

export default Dashboard;