import Crop from '../models/Crop.js';

// Create Crop
export const createCrop = async (req, res) => {
  const { name, description, price, quantity, unit, location } = req.body;
  try {
    const crop = new Crop({ 
      name, 
      description, 
      price, 
      quantity, 
      unit, 
      location, 
      createdBy: req.user.id 
    });
    await crop.save();
    res.status(201).json({ message: 'Crop created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error creating crop' });
  }
};

// Get Crops
export const getCrops = async (req, res) => {
  try {
    const crops = await Crop.find().populate('createdBy', 'name');
    res.json(crops);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching crops' });
  }
};