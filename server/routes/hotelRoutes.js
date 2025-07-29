import express from 'express';

// FIX #1: Corrected the folder path to '../middleware/'.
import { protect } from '../middlewares/authMiddleware.js';

// FIX #2: Corrected the filename to 'hotelController.js' (lowercase h).
import { registerHotel } from '../controllers/hotelControler.js';
import { createHotel } from '../controllers/hotelControler.js';
// FIX #3: Changed to a named export for consistency with your other routes.
export const hotelRouter = express.Router();

// Your route definition is correct.
hotelRouter.post('/', protect, registerHotel);
hotelRouter.post('/', protect, createHotel);