import express from 'express';
import upload from '../middlewares/uploadMiddlewares.js';
import { protect } from '../middlewares/authMiddleware.js';
import { createTRoom, getOwnerRooms, getRooms, toggleRoomAvailability } from '../controllers/roomController.js';


const roomRouter = express.Router();
roomRouter.post('/', upload.array("images" , 4 ), protect , createTRoom);
roomRouter.get('/', getRooms)
roomRouter.get('/owner', protect, getOwnerRooms);
roomRouter.post('/toggle-availability', protect, toggleRoomAvailability);
export default roomRouter;