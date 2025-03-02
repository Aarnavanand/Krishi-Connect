/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light Mode Colors
        'farm-green': '#4CAF50',
        'harvest-orange': '#FF9800',
        'soft-white': '#F9FAFB',
        'dark-gray': '#212121',
        'earth-brown': '#5D4037',
        'golden-beige': '#F5F5DC',
        'muted-green': '#A5D6A7',
        'lush-green': '#43A047',
        'golden-amber': '#FFB300',
        'rich-red': '#D32F2F',
        
        // Dark Mode Colors
        'neon-green': '#66FF66',
        'warm-amber': '#FFB74D',
        'deep-charcoal': '#121212',
        'soft-white': '#E0E0E0',
        'golden-yellow': '#FFC107',
        'dark-earth-brown': '#1E1E1E',
        'muted-olive': '#388E3C',
        'bright-green': '#00E676',
        'vibrant-yellow': '#FFD54F',
        'fiery-red': '#FF5252',
      },
    },
  },
  plugins: [],
}
