import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from '@clerk/express';
import {userRouter} from "./routes/userRoutes.js";
import {hotelRouter} from "./routes/hotelRoutes.js";
import connectCloudinary from "./configs/cloudinary.js";
import roomRouter from "./routes/roomRoutes.js";
import bookingRouter from "./routes/bookingRoute.js";
import clerkWebhooks from "./controllers/clerkWebhooks.js";

connectDB();
connectCloudinary()


const app = express();
// In your server file

app.use(cors());

app.use(express.json());
app.use(clerkMiddleware());
app.use('/api/clerk' , clerkWebhooks)

app.get("/", (req, res) => {
    res.send("API is working fine");
});
app.use('api/user', userRouter)
app.use('api/hotels', hotelRouter)
app.use('api/rooms', roomRouter )
app.use('api/bookings', bookingRouter )

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});