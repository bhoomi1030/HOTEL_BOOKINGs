import Hotel from "../models/Hotel.js";
import User from "../models/User.js";


export const createHotel = async (req, res) => {
    try {
        const { name, location, contact, city } = req.body;
        const owner = req.user._id;
const hotel = await Hotel.findOne({ owner });
       if(hotel){
        res.json({ success: false, message: "Hotel already exists" });
       }
       await Hotel.create({
            name,
            location,
            contact,
            city,
            owner
        });
        await User.findByIdAndUpdate(owner, {
            role : "hotel-owner"
        });
        res.json({ success: true, message: "Hotel created successfully", hotel });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to create hotel" });
    }
}
export const registerHotel = async (req, res) => {
    try {
        // Your hotel registration logic here
        res.json({ success: true, message: "Hotel registered successfully" });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};