import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({

    name: { type: String, required: true },
    location: { type: String, required: true },
    contact: { type: String, required: true },
    city: { type: Number, required: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

const Hotel = mongoose.model("Hotel", hotelSchema);
export default Hotel;