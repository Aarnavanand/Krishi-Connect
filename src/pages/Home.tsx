import React, { useState, useEffect } from 'react';
import { Sun, Cloud, Info, ShoppingBag } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import axios from 'axios';

const WEATHER_API_KEY = 'e4147f495ca298c34bb67ee003696681';

const Home: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [currentWeather, setCurrentWeather] = useState<any | null>(null);
  const [newsIndex, setNewsIndex] = useState(0);
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

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      fetchWeatherData(latitude, longitude);
    });
    const interval = setInterval(() => {
      setNewsIndex((prevIndex) => (prevIndex + 1) % (newsItems.length - 4));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const fetchWeatherData = async (lat: number, lon: number) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${WEATHER_API_KEY}`);
      setCurrentWeather(response.data);
    } catch (error) {
      console.error("Failed to fetch weather data", error);
    }
  };

  return (
    <div className="space-y-8 px-6 py-12">
      {/* Hero Section */}
      <section className={`text-center py-12 rounded-lg shadow-xl text-white transition-all duration-300 ${isDarkMode ? 'bg-gradient-to-r from-neon-green to-warm-amber' : 'bg-gradient-to-r from-farm-green to-harvest-orange'}`}>
        <h1 className="text-4xl font-bold mb-4">Welcome to Farmers' Digital Support System</h1>
        <p className="text-xl">Empowering farmers with real-time data and insights</p>
      </section>

      {/* Cards Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Market Prices Card */}
        <div className={`p-6 rounded-xl shadow-md transition-all duration-300 ${isDarkMode ? 'bg-dark-earth-brown' : 'bg-golden-beige'}`}>
          <h2 className={`text-2xl font-semibold mb-4 flex items-center gap-2 ${isDarkMode ? 'text-neon-green' : 'text-farm-green'}`}>
            <ShoppingBag className="w-6 h-6" /> Latest Market Prices
          </h2>
          <div className="space-y-2">
            <div className="flex justify-between items-center text-lg">
              <span>Wheat</span>
              <span className={`font-semibold ${isDarkMode ? 'text-neon-green' : 'text-farm-green'}`}>₹2,100/quintal</span>
            </div>
            <div className="flex justify-between items-center text-lg">
              <span>Rice</span>
              <span className={`font-semibold ${isDarkMode ? 'text-neon-green' : 'text-farm-green'}`}>₹1,950/quintal</span>
            </div>
            <div className="flex justify-between items-center text-lg">
              <span>Corn</span>
              <span className={`font-semibold ${isDarkMode ? 'text-neon-green' : 'text-farm-green'}`}>₹1,800/quintal</span>
            </div>
          </div>
        </div>

        {/* Weather Updates Card */}
        <div className={`p-6 rounded-xl shadow-md transition-all duration-300 ${isDarkMode ? 'bg-dark-earth-brown' : 'bg-golden-beige'}`}>
          <h2 className={`text-2xl font-semibold mb-4 flex items-center gap-2 ${isDarkMode ? 'text-neon-green' : 'text-farm-green'}`}>
            <Cloud className="w-6 h-6" /> Weather Updates
          </h2>
          {currentWeather && (
            <div className="text-center">
              <p className="text-4xl font-bold">{Math.round(currentWeather.main.temp)}°C</p>
              <p className={`flex items-center justify-center gap-2 ${isDarkMode ? 'text-golden-yellow' : 'text-earth-brown'}`}>
                {currentWeather.weather[0].description}
              </p>
              <p className={`mt-2 ${isDarkMode ? 'text-neon-green' : 'text-farm-green'}`}>Ideal conditions for crop growth</p>
            </div>
          )}
        </div>

        {/* Latest News Card */}
        <div className={`p-6 rounded-xl shadow-md transition-all duration-300 ${isDarkMode ? 'bg-dark-earth-brown' : 'bg-golden-beige'}`}>
          <h2 className={`text-2xl font-semibold mb-4 flex items-center gap-2 ${isDarkMode ? 'text-neon-green' : 'text-farm-green'}`}>
            <Info className="w-6 h-6" /> Latest News
          </h2>
          <div className="overflow-hidden h-40">
            <div className="space-y-3 transition-transform duration-500" style={{ transform: `translateY(-${newsIndex * 20}%)` }}>
              {newsItems.slice(newsIndex, newsIndex + 5).map((news, index) => (
                <div key={index} className="font-medium text-lg">
                  {news}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
