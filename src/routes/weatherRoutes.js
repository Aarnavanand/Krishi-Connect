// Create a new file: src/routes/weatherRoutes.js
import express from 'express';
import axios from 'axios';
const router = express.Router();

router.get('/weather', async (req, res) => {
  try {
    const { lat, lon } = req.query;
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=e4147f495ca298c34bb67ee003696681`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching weather data' });
  }
});

router.get('/forecast', async (req, res) => {
  try {
    const { lat, lon } = req.query;
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=e4147f495ca298c34bb67ee003696681`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching forecast data' });
  }
});

export default router;