import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    user: { type: String, ref: 'User', required: true },
    hotel: { type: String , ref: 'Hotel', required: true },
    room: { type: String , ref: 'Room', required: true },
    checkInDate: { type: Date, required: true },                    
    checkOutDate: { type: Date, required: true },
    totalPrice: { type: Number, required: true },
    status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' },
    paymentStatus: { type: String, enum: ['paid', 'unpaid'], default: 'unpaid' },
    paymentMethod: { type: String, enum: ['credit_card', 'debit_card', 'paypal'], default: 'credit_card' },
    guestCount: { type: Number, required: true },

}, { timestamps: true });

const Booking = mongoose.model("Booking", bookingSchema);
export default bookingSchema;