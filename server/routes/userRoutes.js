import express from 'express';

// FIX #1: Added '.js' to the controller import path.
import { getUser, storeRecentSearch } from '../controllers/UserController.js';

// FIX #2: Corrected the path to '../' and added '.js' for the middleware.
import { protect } from '../middlewares/authMiddleware.js';

// Create the router. This is the only export you need.
export const userRouter = express.Router();

// Define your routes.
userRouter.get('/', protect, getUser);
userRouter.post('/recent-search', protect, storeRecentSearch);

// FIX #3: We removed the incorrect 'react' import and the unnecessary 'export default'.