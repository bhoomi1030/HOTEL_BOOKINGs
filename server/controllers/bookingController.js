import Booking from "../models/booking.js";
import Hotel from "../models/Hotel.js";
import room from "../models/room.js";

const checkAvailability = async (checkInDate , checkOutDate , room ) => {
    try {
        const bookings = await Booking.find({
             room,

                 checkInDate: { $lte: checkOutDate },
                 checkOutDate: { $gte: checkInDate }
        })


        const isAvailable = bookings.length === 0;
        return isAvailable;

        res.status(200).json({ success: true, rooms });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
}
export const checkAvailabilityAPI = async(req , res ) => {
    try {
        const { room , checkInDate , checkOutDate } =  req.body;
        const isAvailable = await checkAvailability({ checkInDate , checkOutDate , room })
        res.json({ success : true , isAvailable})
    } catch (error) {
        res.json({ success : false , message : error.message })
    }
}


export const createBooking = async(req , res) =>{
   try {
     const { room , checkInDate , checkOutDate , guests} = req.body;
     const user = req.user._id

     const isAvailable = await checkAvailability({
        checkInDate,
        checkOutDate,
        room
     }) 
     if(!isAvailable){
        return res.json({ success : false , message: "Room not available "})
     }
     
     const roomData = await room.findById(room).populate ("hotel");
     let totalPrice = roomData.pricePerNight;
     
     const checkIn = new Data(checkInData)
     const checkOut = new Data(checkOutData)
     const timeDiff = checkOut.getTime() - checkIn.getTime();
    const nights = Math.ceil(timeDiff / (1000 * 3600 * 24));
    totalPrice *= nights;
    const booking = await Booking.create({
        user , 
        room ,
        hotel : roomData.hotel._id,
        guests: +guests, 
        checkInData , 
        checkOutDate, 
        totalPrice,

    })
    res.json({ success: true , message : "Booking created successfully "})
   } catch (error) {
    console.log(error);
    res.json({ success : false , message: "Failed to create booking"})
    
   }  
}

export const getUerBookings = async (req , res) =>{
    try {
        const user = req.user._id;
        const bookings = await Booking.find({user}).populate("room hotel").sort({createdAt : -1})
        res.json({ success : true , bookings})
    } catch (error ) {
        res.json({success: false , message : "failed"})
        
    }
}

export const getHotelBookings = async(req , res) =>{
   try{
     const hotel = await Hotel.findOne({owner : req.auth.userId});
    if(!hotel ){
        return res.json({sucess: falselse , message :"No Hotel found"});

    }
    const bookings = await Booking.find({hotel: hotel._id }).populate("room hotel user").sort({createdAt: -1});


    const totalBookings = bookings.length;
    const totalRevenue = bookings.reduce((acc , booking) => acc+ booking.totalPrice , 0)
    res.json({success : true , dashboardData : {totalBookings , totalRevenue, bookings}})
}  catch(error){

      res.json({success : false , message : "Failed to fetch bookings"})
}
}


