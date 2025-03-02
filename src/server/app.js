import express from 'express';
import connectDB from './db.js';
import authRoutes from '../routes/authRoutes.js';
import cropRoutes from '../routes/cropRoutes.js';
import dotenv from 'dotenv';
import cors from 'cors';

// Load environment variables
dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();



// Middleware
app.use(express.json());
app.use(cors({
  origin: [
    'https://krishi-connect-hazel.vercel.app', // Production frontend
    'http://localhost:5173' // Local development frontend
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));



app.get('/api/test', (req, res) => {
  res.status(200).json({ message: 'API is working!' });
});
// Routes
app.use('/api/auth', authRoutes);
app.use('/api/crops', cropRoutes);

// Error handling middleware
// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err.stack);
  res.status(500).json({ 
    error: 'Internal Server Error',
    message: err.message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
});

// Not Found Middleware
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});