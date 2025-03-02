import React, { useState, useEffect } from 'react';
import { Cloud, Sun, CloudRain, Wind, Droplets, Thermometer } from 'lucide-react';
import axios from 'axios';
import { useTheme } from '../context/ThemeContext';


const Weather: React.FC = () => {
  const { isDarkMode } = useTheme();
const [currentWeather, setCurrentWeather] = useState<any>(null);
const [forecast, setForecast] = useState<any>(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherData(latitude, longitude);
        },
        (error) => {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              setError('Location permission denied. Please enable location services.');
              break;
            case error.POSITION_UNAVAILABLE:
              setError('Location information is unavailable.');
              break;
            case error.TIMEOUT:
              setError('The request to get user location timed out.');
              break;
            default:
              setError('An unknown error occurred.');
              break;
          }
          setLoading(false);
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
      setLoading(false);
    }
  }, []);

const fetchWeatherData = async (lat: number, lon: number) => {
  try {
    setLoading(true);
    setError(null);
    
    const [weatherResponse, forecastResponse] = await Promise.all([
      axios.get('/weather-api/data/2.5/weather', { 
        params: { 
          lat, 
          lon, 
          units: 'metric', 
          appid: 'e4147f495ca298c34bb67ee003696681' 
        }
      }),
      axios.get('/weather-api/data/2.5/forecast', { 
        params: { 
          lat, 
          lon, 
          units: 'metric', 
          appid: 'e4147f495ca298c34bb67ee003696681' 
        }
      })
    ]);
    
    setCurrentWeather(weatherResponse.data);
    setForecast(forecastResponse.data);
    setLoading(false);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    setError('Failed to fetch weather data');
    setLoading(false);
  }
};

  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'clear':
        return Sun;
      case 'rain':
        return CloudRain;
      default:
        return Cloud;
    }
  };

  if (loading) {
    return (
      <div className={`flex items-center justify-center min-h-screen 
        ${isDarkMode ? 'bg-deep-charcoal text-soft-white' : 'bg-soft-white text-dark-gray'}`}>
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-farm-green border-t-transparent" />
      </div>
    );
  }

  if (error) {
    return (
      <div className={`flex items-center justify-center min-h-screen 
        ${isDarkMode ? 'bg-deep-charcoal text-fiery-red' : 'bg-soft-white text-rich-red'}`}>
        <p className="text-xl font-semibold">{error}</p>
      </div>
    );
  }

  return (
    <div className={`space-y-6 ${isDarkMode ? 'text-soft-white' : 'text-dark-gray'}`}>
      <h1 className="text-3xl font-bold">Weather Forecast</h1>

      {currentWeather && (
        <div className={`p-8 rounded-lg shadow-md transition-colors duration-200
          ${isDarkMode ? 'bg-dark-earth-brown' : 'bg-golden-beige'}`}>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="flex items-center space-x-4">
              <div>
                <h2 className="text-2xl font-bold mb-2">{currentWeather.name}</h2>
                <p className={isDarkMode ? 'text-golden-yellow' : 'text-earth-brown'}>
                  {currentWeather.weather[0].description}
                </p>
              </div>
              {React.createElement(
                getWeatherIcon(currentWeather.weather[0].main),
                { className: `w-16 h-16 ${isDarkMode ? 'text-warm-amber' : 'text-harvest-orange'}` }
              )}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Thermometer className={`w-5 h-5 ${isDarkMode ? 'text-warm-amber' : 'text-harvest-orange'}`} />
                <div>
                  <p className={`text-sm ${isDarkMode ? 'text-golden-yellow' : 'text-earth-brown'}`}>Feels Like</p>
                  <p className="font-semibold">{Math.round(currentWeather.main.feels_like)}°C</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Droplets className={`w-5 h-5 ${isDarkMode ? 'text-neon-green' : 'text-farm-green'}`} />
                <div>
                  <p className={`text-sm ${isDarkMode ? 'text-golden-yellow' : 'text-earth-brown'}`}>Humidity</p>
                  <p className="font-semibold">{currentWeather.main.humidity}%</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Wind className={`w-5 h-5 ${isDarkMode ? 'text-soft-white' : 'text-dark-gray'}`} />
                <div>
                  <p className={`text-sm ${isDarkMode ? 'text-golden-yellow' : 'text-earth-brown'}`}>Wind Speed</p>
                  <p className="font-semibold">{Math.round(currentWeather.wind.speed * 3.6)} km/h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {forecast && (
        <div className={`p-6 rounded-lg shadow-md transition-colors duration-200
          ${isDarkMode ? 'bg-dark-earth-brown' : 'bg-golden-beige'}`}>
          <h3 className="text-xl font-bold mb-4">5-Day Forecast</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {forecast.list.filter((_, index) => index % 8 === 0).map((day, index) => {
              const Icon = getWeatherIcon(day.weather[0].main);
              const date = new Date(day.dt * 1000);
              return (
                <div key={index} className={`text-center p-4 rounded-lg transition-colors duration-200
                  ${isDarkMode ? 'bg-deep-charcoal' : 'bg-soft-white'}`}>
                  <p className="font-medium">
                    {date.toLocaleDateString('en-US', { weekday: 'short' })}
                  </p>
                  <Icon className={`w-8 h-8 mx-auto my-2 ${isDarkMode ? 'text-warm-amber' : 'text-harvest-orange'}`} />
                  <p className="text-2xl font-bold">{Math.round(day.main.temp)}°C</p>
                  <p className={isDarkMode ? 'text-golden-yellow' : 'text-earth-brown'}>
                    {day.weather[0].main}
                  </p>
                  <p className={`text-sm ${isDarkMode ? 'text-golden-yellow' : 'text-earth-brown'}`}>
                    Humidity: {day.main.humidity}%
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
