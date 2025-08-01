import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on("connected" , () => console.log("Datatbase connected "))
        await mongoose.connect(`${process.env.MONGO_URI}/hotel-booking`)
     

    } catch (error) {
        console.log("MongoDB connection failed:", error.message);
    }
};

export default connectDB;