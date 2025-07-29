import Room from "../models/room.js";
import {v2 as cloudinary} from 'cloudinary';
import Hotel from "../models/Hotel.js";
import room from "../models/room.js";


export const createTRoom = async (req, res) => {
   try {
    const {  roomType, pricePerNight, amenities} = req.body;
    const hotel = await Hotel.findOne({owner: req.auth.userId});
    if (!hotel) {
        return res.status(404).json({ success: false, message: "Hotel not found" });
    }
       const uploadedImages = req.files.map(async (file) => {
            const result = await cloudinary.uploader.upload(file.path);
            return result.secure_url;
    
    })
     const image = await Promise.all(uploadedImages)
    await Room.create({
        hotel: hotel._id,
        roomType,
        pricePerNight: +pricePerNight,
        amenities : JSON.parse(amenities),
        images: image,
    })
    res.json({ success: true, message: "Room created successfully" });

   } catch (error) {
    res.status(500).json({ success: false, message: "Failed to create room" });
   }

}


export const getRooms = async (req, res) => {
    try {
        const rooms = await Room.find({isAvailable : true}).populate({
            path: 'hotel',
            populate: {
                path: 'owner',
                select: 'image'
            }
        }).sort({ createdAt: -1 });
        res.json({ success: true, rooms });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to fetch rooms" });
    }
}

export const getOwnerRooms = async (req, res) => {
  try {
    const hotelData = await Hotel.findOne({ owner: req.auth.userId });
    const ownerRooms = await Room.find({ hotel: hotelData._id.toString()}).populate("Hotel");
    res.json({ success: true, ownerRooms });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch owner's rooms" });
    
  }
}


export const toggleRoomAvailability = async (req, res) => {
 try {
   const { roomId } = req.body;
    const roomData = await Room.findById(roomId);
    roomData.isAvailable = !roomData.isAvailable;
    await roomData.save();
    res.json({ success: true, message: "Room availability toggled successfully" });
 } catch (error) {
    res.status(500).json({ success: false, message: "Failed to toggle room availability" });
 }
}
 