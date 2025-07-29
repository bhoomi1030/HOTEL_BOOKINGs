import express from 'express';
import { checkAvailabilityAPI, createBooking, getHotelBookings, getUerBookings } from '../controllers/bookingController.js';
import { protect } from '../middlewares/authMiddleware.js'
const bookingRouter = express.Router();
bookingRouter.post('/check-availability' , checkAvailabilityAPI)
bookingRouter.post('/book' , protect , createBooking );
bookingRouter.get('/user' , protect , getUerBookings )
bookingRouter.post('/hotel' , protect , getHotelBookings )
export default bookingRouter;