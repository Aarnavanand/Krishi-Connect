import express from 'express';
import { createCrop, getCrops } from '../controllers/cropController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/create', protect, createCrop);
router.get('/', getCrops);

export default router;