import User from "../models/User.js";
import pkg from "svix"; 
  
const clerkWebhooks = async (req , res) => {
    try{
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
        const headers = {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"]
        };

        await whook.verify(JSON .stringify(req.body), headers);
        const {data , type } = req.body;
         
        const userdata = {
            _id: data.id,
            username: data.first_name + " " + data.last_name,
            email: data.email_addresses[0].email_address,
            image: data.profile_image_url,
            role: "user",
            recentSearchedCities: []
        }
        switch (type) {
            case "user.created":{
                await User.create (userdata);
                break; 
            }
                        case "user.updated":{
                await User.findByIdAndUpdate( data.id ,userdata);
                break; 
            }
               case "user.deleted":{
                await User.findByIdAndDelete( data.id);
                break; 
               }
            default:
                break;
        }
        res.json({ success : true , message: "Webhook processed successfully" });

} catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
    
}
}
export default clerkWebhooks;
 